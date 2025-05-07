import Column from "./Column";
import Card from "./Card";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса">
              <Card
                title="Название задачи"
                category="Web Design"
                date="30.10.23"
                theme="_orange"
              />
            </Column>

            <Column title="Нужно сделать">
              <Card
                title="Название задачи"
                category="Research"
                date="30.10.23"
                theme="_green"
              />
            </Column>

            <Column title="В работе">
              <Card
                title="Название задачи"
                category="Copywriting"
                date="30.10.23"
                theme="_purple"
              />
            </Column>

            <Column title="Тестирование">
              <Card
                title="Название задачи"
                category="Web Design"
                date="30.10.23"
                theme="_orange"
              />
            </Column>

            <Column title="Готово">
              <Card
                title="Название задачи"
                category="Research"
                date="30.10.23"
                theme="_green"
              />
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}
