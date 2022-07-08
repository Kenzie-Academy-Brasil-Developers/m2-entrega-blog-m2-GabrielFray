import Api from "./js/Api.js";

const dataUser = await Api.getUserId(
  localStorage.getItem("@kenzie-blog:userId")
);

console.log(dataUser);

const imagePerfil = document.querySelector("#img_perfil");

const nomeUser = document.querySelector("#nome_user");

nomeUser.innerHTML = dataUser.username;
imagePerfil.src = dataUser.avatarUrl;

const logoutButton = document.querySelector(".logout_button");

logoutButton.addEventListener("click", () => {
  localStorage.clear();
  location.replace("../../index.html");
});
