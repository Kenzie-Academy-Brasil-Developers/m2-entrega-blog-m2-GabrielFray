import Api from "./Api.js";
import RenderPost from "./Render.post.js";

export default class DeleteButton {
  static deleteImg = document.querySelectorAll(".delete_img");
  static async deletePostUser() {
    this.deleteImg.forEach((element) => {
      element.addEventListener("click", async () => {
        Swal.fire({
          title: "Você tem certeza bro?",
          text: "Você não vai poder reverter isso man!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, delete isso!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deletado!", "Seu post foi deletado com sucesso!", "success")
              .then(async () => {
                await Api.deletePost(element.id);
              })
              .then(() => {
                location.reload();
              });
          }
        });
      });
    });
  }
}
