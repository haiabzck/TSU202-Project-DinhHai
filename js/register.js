
let formRegister = document.getElementById("form-register");
let users = JSON.parse(localStorage.getItem('users')) || [];
let email = document.getElementById("email");
let password = document.getElementById("password");
let errorfirstName = document.querySelector('.error-firstname');
let errorlastName = document.querySelector('.error-lastname');
let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');
let errorConfirmPassword = document.querySelector('.error-confirm-password');
let checkbox = document.getElementById('terms');



formRegister.addEventListener("submit", function(event) {
    event.preventDefault();
    let emailInput = email.value.trim(); 
    //let passwordInput = password.value.trim(); 

    let checkEmail = users.some(function(u) {
        return u.email === emailInput;
    });

    if (checkEmail == true) {
        alert("Email trung, khong dang ky duoc!");
        return;
    }
    if (validateData(formRegister)) {
        let newUser = {
          firstname: formRegister.firstname.value.trim(),
          lastname : formRegister.lastname.value.trim(),
          email: formRegister.email.value.trim(),
          password: formRegister.password.value.trim(),
          };
        
           users.push(newUser);

          localStorage.setItem("users", JSON.stringify(users));
          alert("Dang ky thanh cong!");
          window.location.href = "./login.html";
        }
});


function validateData(form) {
  let check = true;
   if (form.firstName.value === '') {
    errorfirstName.innerText = 'Không được để trống';
    check = false;
  }
  else {
    errorfirstName.innerText = '';
  }
  if (form.lastName.value === '') {
    errorlastName.innerText = 'Không được để trống';
    check = false;
  }
  else {
    errorlastName.innerText = '';
  }
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
  // validate confirm password
  if (form.confirmPassword.value === '') {
    // trường hợp confirm passwor để trống
    errorConfirmPassword.innerText = 'Xác nhận mật khẩu không được để trống';
    check = false;
  } else if (form.password.value !== form.confirmPassword.value) {
    // kiểm tra password và confirm password có trùng khớp hay không
    errorConfirmPassword.innerText = 'Xác nhận mật khẩu không trùng khớp';
    check = false;
  } else {
    errorConfirmPassword.innerText = '';
  }
  if (!checkbox.checked) {
    alert('Mời bạn tích xác nhận đăng ký');
    check = false;
  }else{
    return check;
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
