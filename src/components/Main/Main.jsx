import { Column } from "./Column";
import { cardList } from "../../data";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { Container } from "../ui/Container.styled";

export function Main() {
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
        <main className="main">
          <div className="loading">Данные загружаются...</div>
        </main>
      ) : (
        <main className="main">
          <Container>
            <div className="main__block">
              <div className="main__content">
                <Column title="Без статуса">
                  {noStatus.map((card) => (
                    <Card
                      key={card.id}
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
                      title={card.title}
                      category={card.topic}
                      date={card.date}
                      theme={card.theme}
                    />
                  ))}
                </Column>
              </div>
            </div>
          </Container>
        </main>
      )}
    </>
  );
}
