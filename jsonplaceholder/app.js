
document.addEventListener("DOMContentLoaded", () => {

    let loadButton = document.getElementById("loadButton")
    loadButton.addEventListener("click", displayToDoDetails)


})
let url = "https://jsonplaceholder.typicode.com/todos/"
function displayToDoDetails() {
    let todoId = document.getElementById("todoId").value;

    fetch(`${url}${todoId}`)
        .then(response => response.json())
        .then(todo => {

            let details = document.getElementById("details")
            details.innerHTML = ""
            let title = document.createElement("h6")
            title.innerText = todo.title;
            details.appendChild(title);
            let complete = document.createElement("p")
            complete.innerText = `completed: ${todo.completed}`
            details.appendChild(complete)
        })



}


