
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form-register");

form.addEventListener("submit", function (event) {
    // Ngan chan hanh vi mac dinh cua form
    event.preventDefault();
    // let emailValue = email.value.trim();
    // let passwordValue = password.value.trim();

    let emailValue = form.email.value.trim();
    let passwordValue = form.password.value.trim();
    const newUser = {
        email: emailValue,
        password: passwordValue
    }
    localStorage.setItem('users', JSON.stringify(newUser));
    console.log(newUser);
})