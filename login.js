const loginForm = document.querySelector(".form-loginup").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("Name").value
    const psw = document.getElementById("Pass").value
    const sname = localStorage.getItem("name")
    const spass = localStorage.getItem("pass")

    if (user === sname && psw === spass) {
        alert("loginup succesfully...")
        window.location = "website3.html";
    }
    else {
        alert("invalid candidate");
    }


});