
function setColor(c){
document.documentElement.style.setProperty('--main',c)
}

function setThai(){

document.getElementById("siteTitle").innerText="ศูนย์บริการ SNA GROUPS"

document.querySelector('[data-edit="service1"]').innerText="บริการแปลเอกสาร"

document.querySelector('[data-edit="service2"]').innerText="บริการตรวจคนเข้าเมือง"

document.querySelector('[data-edit="service3"]').innerText="ภาษีที่ดินและสิ่งปลูกสร้าง"

}

function setEng(){

document.getElementById("siteTitle").innerText="SNA GROUPS Service Portal"

document.querySelector('[data-edit="service1"]').innerText="Translation Service"

document.querySelector('[data-edit="service2"]').innerText="Immigration Service"

document.querySelector('[data-edit="service3"]').innerText="Land & Building Tax"

}

window.onload=setEng
