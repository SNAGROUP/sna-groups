function saveContent(){

let items=document.querySelectorAll("[data-edit]")

items.forEach(el=>{

localStorage.setItem(el.dataset.edit,el.innerText)

})

alert("Saved")

}

function loadContent(){

let items=document.querySelectorAll("[data-edit]")

items.forEach(el=>{

let saved=localStorage.getItem(el.dataset.edit)

if(saved) el.innerText=saved

})

}

window.onload=loadContent
