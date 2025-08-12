import { Calendar } from "../Calendar/Calendar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  BtnBrowseClose,
  BtnBrowseDelete,
  BtnBrowseEdit,
  BtnEditCancel,
  BtnEditClose,
  BtnEditDelete,
  BtnEditEdit,
  BtnGroup,
  CategoriesTheme,
  CategoriesThemeText,
  FormBrowseArea,
  FormBrowseBlock,
  FormSubttl,
  PopBrowse,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseStatus,
  PopBrowseSubttl,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  StatusTheme,
  StatusThemes,
  ThemeDown,
  ThemeDownCategoriesSubttl,
} from "./CardModal.styled";
import { useEffect, useState } from "react";
import {
  deleteCardById,
  getCardById,
  updateCardById,
} from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

export function CardModal() {
  const navigate = useNavigate(); // Хук навигации

  const { user } = useContext(AuthContext);
  const { deleteTask, updateTask } = useContext(TaskContext);

  const { id } = useParams(); // Хук, который помогает получить параметры из URL

  const [card, setCard] = useState(null); // Состояние карточки
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(""); // Состояние ошибки
  const [isEditing, setIsEditing] = useState(false); // Состояние редактирования

  const [title, setTitle] = useState(""); // Состояние заголовка
  const [description, setDescription] = useState(""); // Состояние описания
  const [status, setStatus] = useState(""); // Состояние статуса
  const [topic, setTopic] = useState(""); // Состояние темы

  // Массив, который указывает на цвет в зависимости от темы

  const themeByTopic = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

  // Массив, который содержит все доступные статусы

  const allStatuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  // Получаем содержимое карточки при загрузке страницы

  useEffect(() => {
    // Хук
    const fetchCard = async () => {
      // Асинхронная функция получения карточки
      try {
        const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
        const data = await getCardById(id, token);
        setCard(data.task);
      } catch (err) {
        setError("Задача не найдена или произошла ошибка");
      } finally {
        setLoading(false);
      }
    };
    fetchCard();
  }, [id]);

  useEffect(() => {
    if (card) {
      setTitle(card.title);
      setDescription(card.description);
      setStatus(card.status);
      setTopic(card.topic);
    }
  }, [card]);

  const handleDelete = async () => {
    try {
      await deleteCardById(id, user?.token);
      deleteTask(id);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении: ", err.message);
    }
  };

  const handleSave = async () => {
    try {
      const updated = await updateCardById(
        id,
        { title, description, status, topic, date: card.date },
        user?.token
      );
      updateTask(updated.task);
      setIsEditing(false);
      navigate("/");
    } catch (err) {
      console.error(
        "Ошибка при обновлении:",
        err.response?.data || err.message
      );
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                />
              ) : (
                <PopBrowseTtl>{title}</PopBrowseTtl>
              )}
              <CategoriesTheme $themeColor={themeByTopic[card.topic]} $active>
                <CategoriesThemeText $color={themeByTopic[card.topic]}>
                  {card.topic}
                </CategoriesThemeText>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              {isEditing ? (
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {allStatuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              ) : (
                <StatusThemes>
                  {allStatuses.map((s) => (
                    <StatusTheme
                      key={s}
                      $active={card.status === s}
                      $visible={card.status === s}
                    >
                      <p>{s}</p>
                    </StatusTheme>
                  ))}
                </StatusThemes>
              )}
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <FormSubttl htmlFor="textArea01">Описание задачи</FormSubttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDown>
              <ThemeDownCategoriesSubttl>Категория</ThemeDownCategoriesSubttl>
              {isEditing ? (
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {Object.keys(themeByTopic).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : (
                <CategoriesTheme $themeColor={themeByTopic[topic]} $active>
                  <CategoriesThemeText $color={themeByTopic[topic]}>
                    {topic}
                  </CategoriesThemeText>
                </CategoriesTheme>
              )}
            </ThemeDown>
            <PopBrowseBtnBrowse>
              <BtnGroup>
                {isEditing ? (
                  <>
                    <BtnEditEdit onClick={handleSave}>Сохранить</BtnEditEdit>
                    <BtnEditCancel onClick={() => setIsEditing(false)}>
                      Отменить
                    </BtnEditCancel>
                  </>
                ) : (
                  <BtnBrowseEdit onClick={() => setIsEditing(true)}>
                    Редактировать
                  </BtnBrowseEdit>
                )}
                <BtnBrowseDelete onClick={handleDelete}>
                  Удалить задачу
                </BtnBrowseDelete>
              </BtnGroup>
              <Link to="/">
                <BtnBrowseClose>Закрыть</BtnBrowseClose>
              </Link>
            </PopBrowseBtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}
