import Api from "./Api.js";

const mainPost = document.querySelector(".main_content");

const postUsers = await Api.getPosts(1);

const postUsersData = postUsers.data;

export default class RenderPost {
  static RenderUsersPosts(postUsers) {
    mainPost.insertAdjacentHTML(
      "beforeend",
      `
      <section class="content_my_post">
      <img src="${postUsers.user.avatarUrl}" alt="Foto" />
      <div class="others_perfil">
        <div class="div_infos">
          <h3><strong>${postUsers.user.username}</strong></h3>
          <p>${postUsers.content}</p>
        </div>
      </div>
      <div class="content_date">
      <span>${
        postUsers.createdAt.substring(8, 10) +
        "/" +
        postUsers.createdAt.substring(5, 7) +
        "/" +
        postUsers.createdAt.substring(0, 4)
      }</span>
    </div>
    </section>
    `
    );
  }
}
postUsersData.map((element) => {
  RenderPost.RenderUsersPosts(element);
});
