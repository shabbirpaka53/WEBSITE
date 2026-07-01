let signupform = document.querySelector(".form-signup").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("username").value
    const email = document.getElementById("Email").value
    const pass = document.getElementById("Password").value


    if (name === "" || email === "" || pass === "") {
        alert("Try again failed");
    }
    else {
        alert("SignUp succesfully....");
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("pass", pass)
    }

    window.location = "loginup.html"
});



