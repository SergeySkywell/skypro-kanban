import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { Column } from "./Column";
import { Card } from "./Card";
import { Container } from "../ui/Container.styled";
import {
  Loading,
  MainBlock,
  MainContent,
  MainStyled,
} from "../Main/Content.styled";

export function Content() {
  const { tasks, isLoading, error, getTasks } = useContext(TaskContext);
  const location = useLocation();

  if (location.state?.refresh) {
    getTasks();
    location.state.refresh = false;
  }

  const noStatus = tasks.filter((card) => card.status === "Без статуса");
  const toDo = tasks.filter((card) => card.status === "Нужно сделать");
  const inProgress = tasks.filter((card) => card.status === "В работе");
  const testing = tasks.filter((card) => card.status === "Тестирование");
  const done = tasks.filter((card) => card.status === "Готово");

  const themeByTopic = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

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
                      theme={themeByTopic[card.topic]}
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
                      theme={themeByTopic[card.topic]}
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
                      theme={themeByTopic[card.topic]}
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
                      theme={themeByTopic[card.topic]}
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
                      theme={themeByTopic[card.topic]}
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
