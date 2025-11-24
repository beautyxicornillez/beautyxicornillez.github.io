// Search Bar Function
function searchPage() {
    const text = document.body.innerText.toLowerCase();
    const input = document.querySelector(".search-input").value.toLowerCase();


    if (text.includes(input)) {
        alert("Text found on this page!");
    } else {
        alert("No match found.");
    }
}

// Logo click -> redirect to homepage
const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = "index.html"; // redirects to homepage
    });
}