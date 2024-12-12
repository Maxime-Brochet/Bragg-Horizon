import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/403", "Accès refusé", [], "/pages/403.html"),
  new Route("/", "Accueil", [], "/pages/home.html"),
  new Route(
    "/signin",
    "Connexion",
    ["disconnected"],
    "/pages/auth/signin.html",
    "/js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    ["disconnected"],
    "/pages/auth/signup.html",
    "/js/auth/signup.js"
  ),
  new Route(
    "/account",
    "Mon Compte",
    ["admin", "user"],
    "/pages/auth/account.html",
    "/js/auth/account.js"
  ),
  new Route(
    "/update-password",
    "Modifier le mot de passe",
    ["admin", "user"],
    "/pages/auth/update-password.html",
    "/js/auth/update-password.js"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Bragg Horizon";
