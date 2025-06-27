import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchCards({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCard({
  title,
  description,
  topic,
  status,
  date,
  token,
}) {
  try {
    const response = await axios.post(
      API_URL,
      {
        title,
        description,
        topic,
        status,
        date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Ошибка при создании задачи"
    );
  }
}

export async function getCardById(id, token) {
  const response = await axios.get(
    `https://wedev-api.sky.pro/api/kanban/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export async function deleteCardById(id, token) {
  const response = await axios.delete(
    `https://wedev-api.sky.pro/api/kanban/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
