//Implémentation de la fonction de validation du formulaire du compte utilisateur
const submitButton = document.getElementById("SubmitButton");

const inputName = document.getElementById("NameInput");
const inputEmail = document.getElementById("EmailInput");

inputName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);

validateForm();

function validateForm() {
  const NameOk = validateRequired(inputName);
  const EmailOk = validateEmail(inputEmail);

  if (NameOk && EmailOk) {
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

//Fin de l'implémentation de la fonction de validation du formulaire du compte utilisateur
