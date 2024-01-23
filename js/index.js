let input = prompt("Insert `To Do N` where N is the integer of priority (type \"X\" if you're finished):");
const array = [];
while (input !== "X"){
    input = input.split(" ");
    let toDo = document.createElement("li");
    toDo.innerText = input.slice(0,input.length-1).reduce(function(a,b){return `${a} ${b}`;});
    array.push([toDo,parseInt(input[input.length-1])]);
    input = prompt("Insert `To Do N` where N is the integer of priority (type \"X\" if you're finished):");
}
array.sort(function(a,b) {
    return a[1] - b[1];
})
const list = document.getElementById("containerList");
for (const element of array){
    list.append(element[0])
}