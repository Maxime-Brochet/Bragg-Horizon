import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    "/js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon Compte", "/pages/auth/account.html"),
  new Route(
    "/update-password",
    "Modifier le mot de passe",
    "/pages/auth/update-password.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Bragg Horizon";
