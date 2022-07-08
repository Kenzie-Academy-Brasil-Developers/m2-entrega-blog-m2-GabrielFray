import Api from "./Api.js";

const formRegister = document.querySelector(".login_form");

const registerButton = document.querySelector(".login_btn");

const objectValues = [...formRegister.elements];

export default class Register {
  static async elementsForm() {
    const objectForm = {
      username: objectValues[0].value,
      email: objectValues[1].value,
      avatarUrl: objectValues[2].value,
      password: objectValues[3].value,
    };
    console.log(objectForm);
    const response = await Api.registerUser(objectForm);
    console.log(response);
    if (response) {
      location.replace("../../index.html");
    }
    return await Api.registerUser(objectForm);
  }
}

registerButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await Register.elementsForm();
});
