const dataBase = [
    {id:1,course:"French",difficulty:"Medium",price:"1000"},
    {id:2,course:"German",difficulty:"Hard",price:"1100"},
    {id:3,course:"Portuguese",difficulty:"Easy",price:"700"},
    {id:4,course:"Chinese",difficulty:"Very Hard",price:"1250"},
]

const askForCourses = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(dataBase)
        },3000)
    })
}

let carritoData = []
askForCourses()
    .then((value) => {
        carritoData = value;
        const carritoDom = document.getElementById("carrito-container");
        dataBase.forEach((({id,course,difficulty,price}) => {
            let container = document.createElement("div");
            container.className = "carrito-course"
            let h3 = document.createElement("h3");
            let span = document.createElement("span");
            h3.innerText = `${course} - ${difficulty}`;
            span.innerText = `id:${id} - price:${price}`;
            container.append(h3)
            container.append(span)
            carritoDom.append(container)
        }))
    })
    .catch((error) => {
        console.log("Couldn't contact with data base");
    })
    .finally(() => {
        console.log("Process finished");
    })