import { Link, Navigate, useNavigate } from "react-router-dom";
import { Calendar } from "../components/Calendar/Calendar";
import { PopNewCardCalendar } from "../components/Calendar/Calendar.styled";
import {
  CategoriesP,
  CategoriesTheme,
  CategoriesThemes,
  CategoriesThemeText,
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardStyled,
  PopNewCardTtl,
  PopNewCardWrap,
  Subttl,
} from "./NewCardPage.styled";
import { useState } from "react";
import { createCard } from "../services/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TaskContext } from "../context/TaskContext";

export function NewCardPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const { addTask } = useContext(TaskContext);

  const handleCreate = async () => {
    try {
      if (!title.trim() || !description.trim()) {
        alert("Заполните все поля");
        return;
      }

      const newTask = await createCard({
        title,
        description,
        topic: category,
        status: "Без статуса",
        date: date.toISOString(),
        token: user?.token,
      });

      addTask(newTask);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при создании задачи:", err.message);
      setError(err.message);
    }
  };

  return (
    <PopNewCardStyled id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <Link to="/">
              <PopNewCardClose>&#10006;</PopNewCardClose>
            </Link>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard">
                <FormNewBlock>
                  <Subttl htmlFor="formTitle">Название задачи</Subttl>
                  <FormNewInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите название задачи..."
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl htmlFor="textArea">Описание задачи</Subttl>
                  <FormNewArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar selectedDate={date} setSelectedDate={setDate} />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                {["Web Design", "Research", "Copywriting"].map((cat, index) => (
                  <CategoriesTheme
                    key={cat}
                    $themeColor={["orange", "green", "purple"][index]}
                    $active={category === cat}
                    onClick={() => setCategory(cat)}
                  >
                    <CategoriesThemeText
                      $color={["orange", "green", "purple"][index]}
                    >
                      {cat}
                    </CategoriesThemeText>
                  </CategoriesTheme>
                ))}
              </CategoriesThemes>
            </PopNewCardCategories>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <FormNewCreate onClick={handleCreate}>Создать задачу</FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyled>
  );
}
