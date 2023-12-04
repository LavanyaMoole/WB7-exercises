
document.addEventListener("DOMContentLoaded", () => {


    let loadUsersButton = document.getElementById("loadUsersButton")
    loadUsersButton.addEventListener("click", loadUsers)

    let userSelect = document.getElementById("userSelect")
    userSelect.addEventListener("change", displayUserInfo)

})


function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            console.log(users)

            let userSelect = document.getElementById("userSelect")

            users.forEach(user => {
                let option = new Option(user.name, user.id)
                userSelect.appendChild(option)
            });
        })

}

function displayUserInfo() {

    let userSelect = document.getElementById("userSelect")
    let id = userSelect.value

    let url = `https://jsonplaceholder.typicode.com/users/${id}`


    let details = document.getElementById("details")
    details.innerHTML = ""

    fetch(url).then(response => response.json())
        .then(user => {
            // display the info

            let title = document.createElement("h1")
            title.innerText = user.name

            details.appendChild(title);
            let username = document.createElement("p");
            username.innerText = `username: ${user.username}`
            let email = document.createElement("p");
            email.innerText = `email: ${user.email}`
            let phone = document.createElement("p");
            phone.innerText = `phone number: ${user.phone}`
            let company = document.createElement("p");
            company.innerText = `company: ${user.company.name}`
            let website = document.createElement("p");
            website.innerText = `website: ${user.website}`
            details.appendChild(username);
            details.appendChild(email);
            details.appendChild(phone);
            details.appendChild(company);
            details.appendChild(website)

        })
}