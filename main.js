const form = document.getElementById("form")
const password = document.getElementById("password");
const Confirm_Password = document.getElementById("Confirm-Password");
const user_name = document.getElementById("name");
const user_email = document.getElementById("email");
const massage = document.getElementById("massage");


form.addEventListener("submit", function (e) {
    // e.preventDefault();
    if (password.value != Confirm_Password.value) {
        e.preventDefault();
        massage.textContent = "password don't match"
        massage.style.color = "red"
    }
    else {
        massage.textContent = ""
    }
});

