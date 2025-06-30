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

export function CardModal() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [topic, setTopic] = useState("");

  const themeByTopic = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

  const allStatuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
        const data = await getCardById(id, token);
        setCard(data.task); // API возвращает { task: { ... } }
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
      const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
      await deleteCardById(id, token);
      navigate("/", { state: { refresh: true } });
    } catch (err) {
      console.error("Ошибка при удалении: ", err.message);
    }
  };

  const handleSave = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
      console.log({ title, description, status, topic, date: card.date });
      await updateCardById(
        id,
        { title, description, status, topic, date: card.date },
        token
      );
      setIsEditing(false);
      navigate("/", { state: { refresh: true } });
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
