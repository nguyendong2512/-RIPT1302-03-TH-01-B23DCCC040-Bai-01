const adminAccount = "admin"
const adminPassword = "admin"

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminAccount && password === adminPassword) {

        window.location.href = "/Bài 2/index2.html";
    } else {

        alert("Tài khoản hoặc mật khẩu không đúng")
    }
}