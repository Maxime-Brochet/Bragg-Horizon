//Implémentation de la fonction de validation du formulaire d'inscription
const submitButton = document.getElementById("SubmitButton");

const inputName = document.getElementById("NameInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputPasswordConfirm = document.getElementById("ValidatePasswordInput");

inputName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputPasswordConfirm.addEventListener("keyup", validateForm);

validateForm();

function validateForm() {
  const NameOk = validateRequired(inputName);
  const EmailOk = validateEmail(inputEmail);
  const PasswordOk = validatePassword(inputPassword);
  const PasswordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputPasswordConfirm
  );

  if (NameOk && EmailOk && PasswordOk && PasswordConfirmOk) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function validateRequired(input) {
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

function validatePassword(input) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const password = input.value;
  if (password.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value == inputConfirmPwd.value && inputConfirmPwd.value != "") {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}

//Fin de l'implémentation de la fonction de validation du formulaire d'inscription
