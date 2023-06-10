document.getElementById("addUser").addEventListener("click", (e) => {
    e.preventDefault();
    
    let row = document.createElement("tr");
    let firstName = document.createElement("td");
    let lastName = document.createElement("td");
    let email = document.createElement("td");
    let userName = document.createElement("td");
    let remove = document.createElement("td");
    let removeUser = document.createElement("button");

    firstName.innerHTML = document.getElementById("firstName").value;
    lastName.innerHTML = document.getElementById("lastName").value;
    email.innerHTML = document.getElementById("email").value;
    userName.innerHTML = document.getElementById("userName").value;

    removeUser.innerHTML = "Remove";
    removeUser.setAttribute("class", "btn btn-dark");
    removeUser.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    });

    remove.appendChild(removeUser);

    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(email);
    row.appendChild(userName);
    row.appendChild(remove);

    document.getElementById("userTable").appendChild(row);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userName").value = "";
});