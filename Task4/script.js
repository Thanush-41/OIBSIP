let users = [];

function toggleForm(formId) {
    document.getElementById("registerForm").style.display = formId === "registerForm" ? "block" : "none";
    document.getElementById("loginForm").style.display = formId === "loginForm" ? "block" : "none";
    document.getElementById("message").innerHTML = "";
}

function register() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    if (!regUsername || !regPassword) {
        document.getElementById("message").innerHTML = "Username and password are required.";
        return;
    }

    if (users.find(user => user.username === regUsername)) {
        document.getElementById("message").innerHTML = "Username already exists. Please choose a different one.";
        return;
    }

    users.push({ username: regUsername, password: regPassword });
    document.getElementById("message").innerHTML = "Registration successful! Please login.";
    toggleForm("loginForm");
}

function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (!loginUsername || !loginPassword) {
        document.getElementById("message").innerHTML = "Username and password are required.";
        return;
    }

    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        document.getElementById("message").innerHTML = `Hello, ${loginUsername}! Login successful.`;
        window.location.href = "secured.html"; // Redirect to the secured page
    } else {
        document.getElementById("message").innerHTML = "Invalid login credentials. Please try again.";
    }
}
