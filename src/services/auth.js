import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

// Авторизация

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + "/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Неверный логин или пароль");
  }
}

// Регистрация

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
