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
import { getCardById } from "../../services/api";

export function CardModal() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{card.title}</PopBrowseTtl>
              <CategoriesTheme $themeColor={themeByTopic[card.topic]} $active>
                <CategoriesThemeText $color={themeByTopic[card.topic]}>
                  {card.topic}
                </CategoriesThemeText>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <PopBrowseSubttl>Статус</PopBrowseSubttl>
              <StatusThemes>
                {allStatuses.map((status) => (
                  <StatusTheme
                    key={status}
                    $active={card.status === status}
                    $visible={card.status === status}
                  >
                    <p>{status}</p>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <FormSubttl htmlFor="textArea01">Описание задачи</FormSubttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={card.description}
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDown>
              <ThemeDownCategoriesSubttl>Категория</ThemeDownCategoriesSubttl>
              <CategoriesTheme $themeColor={themeByTopic[card.topic]} $active>
                <CategoriesThemeText $color={themeByTopic[card.topic]}>
                  {card.topic}
                </CategoriesThemeText>
              </CategoriesTheme>
            </ThemeDown>
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <BtnBrowseEdit>
                  <a href="#">Редактировать задачу</a>
                </BtnBrowseEdit>
                <BtnBrowseDelete>
                  <a href="#">Удалить задачу</a>
                </BtnBrowseDelete>
              </BtnGroup>
              <Link to="/">
                <BtnBrowseClose>Закрыть</BtnBrowseClose>
              </Link>
            </PopBrowseBtnBrowse>
            <PopBrowseBtnEdit>
              <BtnGroup>
                <BtnBrowseClose onClick={() => navigate("/")}>
                  Закрыть
                </BtnBrowseClose>
                <BtnEditCancel>
                  <a href="#">Отменить</a>
                </BtnEditCancel>
                <BtnEditDelete id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </BtnEditDelete>
              </BtnGroup>
              <BtnEditClose>
                <a href="#">Закрыть</a>
              </BtnEditClose>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}
