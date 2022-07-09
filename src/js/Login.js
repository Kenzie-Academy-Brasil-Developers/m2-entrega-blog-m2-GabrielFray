import Api from "./Api.js";

const formLogin = document.querySelector(".login_form");

const loginButton = document.querySelector(".login_btn");

const objectValues = [...formLogin.elements];

export default class Login {
  static async elementsForm() {
    const objectForm = {
      email: objectValues[0].value,
      password: objectValues[1].value,
    };
    const response = await Api.loginUser(objectForm);
    localStorage.setItem("@kenzie-blog:token", response.token);
    if (response.userId) {
      const userData = await Api.getUserId(response.userId);
      localStorage.setItem("@kenzie-blog:avatarUrl", userData.avatarUrl);
      localStorage.setItem("@kenzie-blog:username", userData.username);
      location.replace("./src/pages/blog.html");
    }
    return response;
  }
}

loginButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await Login.elementsForm();
});

