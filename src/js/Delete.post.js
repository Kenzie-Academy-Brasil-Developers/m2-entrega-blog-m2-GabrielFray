import Api from "./Api.js";
import RenderPost from "./Render.post.js";

export default class DeleteButton {
  static deleteImg = document.querySelectorAll(".delete_img");
  static async deletePostUser() {
    this.deleteImg.forEach((element) => {
      element.addEventListener("click", async () => {
        await Api.deletePost(element.id);
        location.reload();
      });
    });
  }
}
