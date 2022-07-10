import Api from "./Api.js";

export default class CreateMyPost {
  static textarea = document.querySelector("#main_content_textarea");

  static buttonAddPost = document.querySelector(".add_button");

  static async addPost() {
    this.buttonAddPost.addEventListener("click", async (event) => {
      event.preventDefault();
      const postCreated = await Api.createPost(this.textarea.value);
      if (postCreated.message) {
        Swal.fire({
          title: "Pera-lá amigão...",
          text: `${postCreated.message}!`,
        });
      } else {
        location.reload();
      }
    });
  }
}
