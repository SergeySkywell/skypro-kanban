import { Column } from "./Column";
import { cardList } from "../../data";
import { Card } from "./Card";
import { useState, useEffect, useCallback } from "react";
import { Container } from "../ui/Container.styled";
import {
  Loading,
  MainBlock,
  MainContent,
  MainStyled,
} from "../Main/Content.styled";
import { fetchCards } from "../../services/api";
import { useLocation } from "react-router-dom";

export function Content() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const getCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
      const data = await fetchCards({ token });
      if (data?.tasks) setCards(data.tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    getCards();
  }, [getCards, location.state?.refresh]);

  const noStatus = cards.filter((card) => card.status === "Без статуса");
  const toDo = cards.filter((card) => card.status === "Нужно сделать");
  const inProgress = cards.filter((card) => card.status === "В работе");
  const testing = cards.filter((card) => card.status === "Тестирование");
  const done = cards.filter((card) => card.status === "Готово");

  return (
    <>
      {isLoading ? (
        <MainStyled>
          <Loading>Данные загружаются...</Loading>
        </MainStyled>
      ) : (
        <MainStyled>
          {error && <p style={{ color: "red", padding: "10px" }}>{error}</p>}
          <Container>
            <MainBlock>
              <MainContent>
                <Column title="Без статуса">
                  {noStatus.map((card) => (
                    <Card
                      key={card._id}
                      id={card._id}
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>

                <Column title="Нужно сделать">
                  {toDo.map((card) => (
                    <Card
                      key={card._id}
                      id={card._id}
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>

                <Column title="В работе">
                  {inProgress.map((card) => (
                    <Card
                      key={card._id}
                      id={card._id}
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>

                <Column title="Тестирование">
                  {testing.map((card) => (
                    <Card
                      key={card._id}
                      id={card._id}
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>

                <Column title="Готово">
                  {done.map((card) => (
                    <Card
                      key={card._id}
                      id={card._id}
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>
              </MainContent>
            </MainBlock>
          </Container>
        </MainStyled>
      )}
    </>
  );
}
