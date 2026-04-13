
let users = JSON.parse(localStorage.getItem('users')) || [];
let formLogin = document.getElementById('form-login');
let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailInput = formLogin.email.value.trim();
  let passwordInput = formLogin.password.value.trim();
  if (validateData(formLogin)) {
    let checkLogin = users.some((u) => {
        return u.email === emailInput && u.password === passwordInput;
    });
    if (checkLogin == true) {
        let isLogin = true;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
        alert('Đăng nhập thành công');
        window.location.href = "./category.html";
    } else {
      alert('Email hoặc mật khẩu sai');
    }
  }
});

function validateData(form) {
  let check = true;
  // validate email
  if (form.email.value === '') {
    // trường hợp email để trống
    errorEmail.innerText = 'Email không được để trống';
    check = false;
  } else if (!validEmail(form.email.value)) {
    // kiểm tra validate email hợp lệ bằng pattern (regex)
    errorEmail.innerText = 'Email không hợp lệ';
    check = false;
  } else {
    errorEmail.innerText = '';
  }
  // validate password
  if (form.password.value === '') {
    // trường hợp password để trống
    errorPassword.innerText = 'Password không được để trống';
    check = false;
  } else if (!validPassword(form.password.value)) {
    // kiểm tra validate password hợp lệ bằng pattern (regex)
    errorPassword.innerText = 'Password không hợp lệ';
    check = false;
  } else {
    errorPassword.innerText = '';
  }
  return check;
}

function validEmail(email) {
  // sử dụng regex -> regular expression
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}