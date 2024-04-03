let nav_login = document.getElementById('nav_login');
$(function(){
    $("#nav_login").load("navbar.html");
})

let signin_form = document.getElementById("signin_form");

signin_form.addEventListener("click", () => {
    login();
})


let users = [
    { username: 'Thakoor@gmail.com', password: '123456789' },
    { username: 'Shobhit@123mail.com', password: '999999' },
    { username: 'jayant@hotmail.com', password: '000000' }
];

// Function to handle login
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    // Check if user exists and password matches
    for (let user of users) {
        if (user.username === username && user.password === password) {
            window.location.href = "../admindash/admin.html";
            alert('Welcome to ZEN-MART Admin-DashBoard!');
            return;
        }
        else { 
            window.location.href = "../Pages/LandingPage.html";
        }
    }

    alert('Invalid username or password!');
}
