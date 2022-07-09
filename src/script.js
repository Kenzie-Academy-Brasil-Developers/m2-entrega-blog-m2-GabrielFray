import Api from "./js/Api.js";
import RenderPost from "./js/Render.post.js";
import CreateMyPost from "./js/Create.post.js";
import DeleteButton from "./js/Delete.post.js";
import EditButton from "./js/Edit.post.js";

const dataUser = await Api.getUserId(
  localStorage.getItem("@kenzie-blog:userId")
);

const imagePerfil = document.querySelector("#img_perfil");

const nomeUser = document.querySelector("#nome_user");

nomeUser.innerHTML = dataUser.username;
imagePerfil.src = dataUser.avatarUrl;

const logoutButton = document.querySelector(".logout_button");

logoutButton.addEventListener("click", () => {
  localStorage.clear();
  location.replace("../../index.html");
});

CreateMyPost.addPost();

DeleteButton.deletePostUser();

EditButton.editPostUser()
