import { Column } from "./Column";
import { cardList } from "../../data";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { Container } from "../ui/Container.styled";
import {
  Loading,
  MainBlock,
  MainContent,
  MainStyled,
} from "../Main/Content.styled";

export function Content() {
  const noStatus = cardList.filter((card) => card.status === "Без статуса");
  const toDo = cardList.filter((card) => card.status === "Нужно сделать");
  const inProgress = cardList.filter((card) => card.status === "В работе");
  const testing = cardList.filter((card) => card.status === "Тестирование");
  const done = cardList.filter((card) => card.status === "Готово");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <MainStyled>
          <Loading>Данные загружаются...</Loading>
        </MainStyled>
      ) : (
        <MainStyled>
          <Container>
            <MainBlock>
              <MainContent>
                <Column title="Без статуса">
                  {noStatus.map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
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
                      key={card.id}
                      id={card.id}
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
                      key={card.id}
                      id={card.id}
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
                      key={card.id}
                      id={card.id}
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
                      key={card.id}
                      id={card.id}
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
