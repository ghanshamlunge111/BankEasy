document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Send a POST request to the backend API for user login
    fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(function(response) {
        if (response.ok) {
            // User login successful, redirect to dashboard or perform other actions
            console.log("User logged in successfully");
        } else {
            // User login failed, display error message or perform other actions
            console.log("User login failed");
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    
    // Send a POST request to the backend API for user registration
    fetch("/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: newUsername,
            password: newPassword
        })
    })
    .then(function(response) {
        if (response.ok) {
            // User registration successful, display success message or perform other actions
            console.log("User registered successfully");
        } else {
            // User registration failed, display error message or perform other actions
            console.log("User registration failed");
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});
