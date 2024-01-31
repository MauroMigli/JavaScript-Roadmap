const form = document.getElementById("formulario")
const btn = document.getElementById("btnEvent");
const list = document.getElementById("orderedList");
const txt = document.getElementById("txtInput");
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light")

// Saving to-dos

const toDosArray = JSON.parse(localStorage.getItem("toDos")) || [];

toDosArray.forEach(function(todo){
    sendToDo(todo);
})

function sendToDo(text){
    if (text === ""){
        alert("Enter a valid task");
        return;
    }
    let div = document.createElement("div");
    let closeBtn = document.createElement("button");
    let listItem = document.createElement("li");
    div.className = "container"
    closeBtn.innerText = "Remove"
    closeBtn.addEventListener("click",function(){
        div.remove()
        const index = toDosArray.indexOf(text)
        if (index !== -1){
            toDosArray.splice(index, 1);
            localStorage.setItem("toDos", JSON.stringify(toDosArray));
        }
    })
    listItem.innerText = text;
    div.append(listItem);
    div.append(closeBtn);
    list.append(div);
}

// Dark Mode

function handleDark(event){
    event.preventDefault();
    document.body.classList.add("darkTheme");
    localStorage.setItem("theme","dark");
}

function handleLight(event){
    event.preventDefault();
    document.body.classList.remove("darkTheme");
    localStorage.setItem("theme","light")
}
// Event listeners

darkBtn.addEventListener("change",handleDark);
lightBtn.addEventListener("change",handleLight);
form.addEventListener("submit",function(event){
    event.preventDefault()
    sendToDo(txt.value)
    toDosArray.push(txt.value);
    localStorage.setItem("toDos",JSON.stringify(toDosArray))
    txt.value = ""
});

localStorage.getItem("theme") === "dark" ? document.body.classList.add("darkTheme"): null;