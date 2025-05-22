import { ColumnTitle, ColumnTitleText, MainColumn } from "./Column.styled";

export function Column({ title, children }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <div>{children}</div>
    </MainColumn>
  );
}
