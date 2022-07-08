export default class Api {
  static token = localStorage.getItem("@kenzie-blog:token");

  static base_url = "https://blog-m2.herokuapp.com";

  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };

  static async registerUser(data) {
    const response = await fetch(`${this.base_url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => response)
      .catch((err) => console.error(err));

    return response;
  }

  static async loginUser(data) {
    return await fetch(`${this.base_url}/users/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem(
          "@kenzie-blog:userId",
          JSON.stringify(response.userId)
        );
        localStorage.setItem(
          "@kenzie-blog:token",
          JSON.stringify(response.token)
        );

        return response;
      })
      .catch((err) => console.error(err));
  }

  static async getUserId(user_id) {
    return await fetch(`${this.base_url}/users/${user_id}`, {
      method: "GET",
      headers: this.headers,
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async getPosts(num_url) {
    return await fetch(`${this.base_url}/posts?page=${num_url}`, {
      method: "GET",
      headers: this.headers,
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }
}
