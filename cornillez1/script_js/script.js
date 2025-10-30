// Array to store user data
let users = [];

// Function to add user to table
function addUser() {
    // Variables to store user input
    let idNumber = document.getElementById("idNumber").value;
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let birthday = document.getElementById("birthday").value;

    // Validate inputs
    if (!idNumber || !firstName || !lastName || !gender || !birthday) {
        alert("Please fill in all required fields!");
        return;
    }

    // Create a user object
    let user = {
        idNumber,
        firstName,
        middleName,
        lastName,
        gender,
        birthday
    };

    // Push to array
    users.push(user);

    // Update the table
    displayUsers();

    // Clear form fields
    document.getElementById("signupForm").reset();
}

// Function to display users in the table
function displayUsers() {
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        let row = `
            <tr>
                <td>${user.idNumber}</td>
                <td>${user.firstName}</td>
                <td>${user.middleName}</td>
                <td>${user.lastName}</td>
                <td>${user.gender}</td>
                <td>${user.birthday}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Event listener for the Save button
document.getElementById("saveBtn").addEventListener("click", addUser);

// Add interactivity: change background color when hovering over the form
document.getElementById("signupForm").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#e8f0fe";
});
document.getElementById("signupForm").addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});
