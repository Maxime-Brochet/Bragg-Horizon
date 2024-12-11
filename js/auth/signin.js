//Implémentation de la fonction de validation du formulaire de connexion
const submitButton = document.getElementById("SubmitButton");

const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");

inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);

validateForm();

function validateForm() {
  const EmailOk = validateEmail(inputEmail);
  const PasswordOk = validatePassword(inputPassword);

  if (EmailOk && PasswordOk) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
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

//Fin de l'implémentation de la fonction de validation du formulaire de connexion
