import { Link, Navigate } from "react-router-dom";
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

export function NewCardPage() {
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
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <Subttl htmlFor="formTitle">Название задачи</Subttl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl htmlFor="textArea">Описание задачи</Subttl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme $themeColor="orange" $active>
                  <CategoriesThemeText $color="orange">
                    Web Design
                  </CategoriesThemeText>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="green">
                  <CategoriesThemeText $color="green">
                    Research
                  </CategoriesThemeText>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="purple">
                  <CategoriesThemeText $color="purple">
                    Copywriting
                  </CategoriesThemeText>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyled>
  );
}
