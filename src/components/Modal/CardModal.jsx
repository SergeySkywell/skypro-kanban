import { Calendar } from "../Calendar/Calendar";
import { useParams } from "react-router-dom";
import {
  CategoriesTheme,
  CategoriesThemeText,
  PopBrowse,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseStatus,
  PopBrowseSubttl,
  PopBrowseTopBlock,
  PopBrowseTtl,
  StatusTheme,
  StatusThemes,
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

  if (!card) return <div>Карточка не найдена</div>;

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи {id}</PopBrowseTtl>
              <CategoriesTheme $themeColor={card.theme} active>
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
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}
