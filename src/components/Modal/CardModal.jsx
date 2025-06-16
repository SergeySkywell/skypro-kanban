import { Calendar } from "../Calendar/Calendar";
import { Link, Navigate, useParams } from "react-router-dom";
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
import { cardList } from "../../data";

export function CardModal() {
  const { id } = useParams();
  const card = cardList.find((item) => item.id === Number(id));

  const allStatuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи {id}</PopBrowseTtl>
              <CategoriesTheme $themeColor={card.theme} $active>
                <CategoriesThemeText $color={card.theme}>
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
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDown>
              <ThemeDownCategoriesSubttl>Категория</ThemeDownCategoriesSubttl>
              <CategoriesTheme $themeColor={card.theme} $active>
                <CategoriesThemeText $color={card.theme}>
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
                <BtnBrowseClose onClick={() => Navigate("/")}>
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
