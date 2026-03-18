let data = [];

// เพิ่มรายการ
function addTransaction() {
  const row = {
    date: document.getElementById("date").value,
    name: document.getElementById("name").value,
    account: document.getElementById("account").value,
    income: document.getElementById("income").value || 0,
    expense: document.getElementById("expense").value || 0
  };

  data.push(row);
  renderTable();
}

// แสดงตาราง
function renderTable() {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";

  data.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.date}</td>
      <td>${item.name}</td>
      <td>${item.account}</td>
      <td>${item.income}</td>
      <td>${item.expense}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Export Excel
function exportExcel() {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "บัญชี");
  XLSX.writeFile(wb, "accounting.xlsx");
}

// Import Excel
document.getElementById("excelFile").addEventListener("change", function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(evt) {
    const workbook = XLSX.read(evt.target.result, { type: "binary" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    data = json;
    renderTable();
  };

  reader.readAsBinaryString(file);
});
