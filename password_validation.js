
let password = document.querySelector(".user_pass");
let confirm_password = document.querySelector(".confirm_pass");
let submit_button = document.querySelector(".submit-button");

submit_button.addEventListener("click", () => {
    // alert("user current pass is " + password.value + " user confirm pass is " + confirm_password.value)

    if (password.value !== confirm_password.value) {
        alert("password not equal !")

        event.preventDefault();

        password.style.border = "2px solid red"
        confirm_password.style.border = "2px solid red"
    } else {
        password.style.border = ""
        confirm_password.style.border = ""
    }
})