const submitButton = document.getElementById("SubmitButton");

const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const feedback = document.getElementById("feedback-signin");

//Implémentation de la fonction de vérification des identifiants

submitButton.addEventListener("click", checkCredentials);

function checkCredentials() {
  if (
    //TODO: Appeler l'API pour vérifier les identifiants
    inputEmail.value == "test@test.fr" &&
    inputPassword.value == "Test1234!"
  ) {
    const token = "luzyz04l4epcshjhkxw767dr0loe1lsq"; //TODO: Récupérer le token de l'utilisateur
    setToken(token);
    setCookie("role", "admin", 7);

    window.location.replace("/");
  } else {
    alert("Identifiants incorrects");
    inputEmail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
    feedback.classList.add("is-invalid");
  }
}

//Fin de l'implémentation de la fonction de vérification des identifiants
