// Array to store user data
let users = [];

// Function to add user to table
function addUser() {
    // Variables to store user input
    const idNumber = document.getElementById("idNumber").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;

    // Validate inputs
    if (!idNumber || !firstName || !lastName || !gender || !birthday) {
        alert("Please fill in all required fields!");
        return;
    }

    // Create a user object
    const user = {
        idNumber,
        firstName,
        middleName,
        lastName,
        gender,
        birthday
    };

    // Add user to array
    users.push(user);

    // Display data on table
    displayUsers();

    // Clear form
    document.getElementById("signupForm").reset();
}

// Function to display all users
function displayUsers() {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = ""; // Clear table first

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.idNumber}</td>
            <td>${user.firstName}</td>
            <td>${user.middleName}</td>
            <td>${user.lastName}</td>
            <td>${user.gender}</td>
            <td>${user.birthday}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Event listener for Save button
document.addEventListener("DOMContentLoaded", function() {
    const saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click", addUser);

    // Add interactivity: background color on hover
    const form = document.getElementById("signupForm");
    form.addEventListener("mouseover", () => form.style.backgroundColor = "#e8f0fe");
    form.addEventListener("mouseout", () => form.style.backgroundColor = "white");
});
