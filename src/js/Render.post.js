import Api from "./Api.js";

const mainPost = document.querySelector(".main_content");

const postUsersData = await Api.getPosts(1);

export default class RenderPost {
  static renderUsersPosts(postUsers) {
    const userId = localStorage.getItem("@kenzie-blog:userId");

    const verificator = postUsers.user.id == userId;

    const sectionPosts = document.createElement("section");
    const figure = document.createElement("figure");
    const imgPosts = document.createElement("img");
    const divInfos = document.createElement("div");
    const divOthersContent = document.createElement("div");
    const h3 = document.createElement("h3");
    const strong = document.createElement("strong");
    const p = document.createElement("p");
    const divButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const imgEdit = document.createElement("img");
    const deleteButton = document.createElement("button");
    const imgDelete = document.createElement("img");
    const divDate = document.createElement("div");
    const span = document.createElement("span");

    sectionPosts.classList.add("content_my_post");
    divInfos.classList.add("div_infos");
    divOthersContent.classList.add("div_others");
    divButtons.classList.add(`every_buttons`);
    editButton.classList.add("edit_button");
    imgEdit.classList.add("edit_img");
    imgEdit.id = postUsers.id;
    deleteButton.classList.add("delete_button");
    imgDelete.classList.add("delete_img");
    imgDelete.id = postUsers.id;
    divDate.classList.add("content_date");

    imgPosts.src = postUsers.user.avatarUrl;
    imgPosts.alt = "Foto do usuário";
    strong.innerText = postUsers.user.username;
    p.innerText = postUsers.content;
    divButtons.innerText = ``;
    imgEdit.src = "../assets/editar-arquivo.png";
    imgEdit.alt = "Editar";
    imgDelete.src = "../assets/excluir.png";
    imgDelete.alt = "Delete";
    span.innerText = `${
      postUsers.createdAt.substring(8, 10) +
      "/" +
      postUsers.createdAt.substring(5, 7) +
      "/" +
      postUsers.createdAt.substring(0, 4)
    }`;

    imgPosts.addEventListener("error", () => {
      imgPosts.src = "https://www.gov.br/cdn/sso-status-bar/src/image/user.png";
    });

    figure.append(imgPosts);
    divDate.append(span);
    editButton.append(imgEdit);
    deleteButton.append(imgDelete);
    if (verificator) {
      divButtons.append(editButton, deleteButton);
    }
    divButtons.append(divDate)
    h3.append(strong);
    divInfos.append(h3, p);
    divOthersContent.append(divInfos, divButtons);
    sectionPosts.append(figure, divOthersContent);
    mainPost.append(sectionPosts);

    imgEdit.addEventListener("click", async () => {
      const write = prompt("escreva aqui");
      await Api.editPost({ content: write }, postUsers.id);
      location.reload();
      
    });
  }
}
 postUsersData.data.map((element) => {
  RenderPost.renderUsersPosts(element);
});
