let form = document.getElementById("formulario")
let btn = document.getElementById("btnEvent");
let list = document.getElementById("orderedList");
let txt = document.getElementById("txtInput");
function handleBtn(event){
    event.preventDefault()
    let div = document.createElement("div");
    let closeBtn = document.createElement("button");
    let listItem = document.createElement("li");
    div.className = "container"
    closeBtn.innerText = "Remove"
    closeBtn.addEventListener("click",function(){
        div.remove()
    })
    listItem.innerText = txt.value;
    div.append(listItem);
    div.append(closeBtn);
    list.append(div)
    txt.value = ""
}
form.addEventListener("submit",handleBtn);