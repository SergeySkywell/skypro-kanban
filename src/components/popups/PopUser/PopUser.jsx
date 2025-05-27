import {
  PopUserButton,
  PopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUser.styled";

export function PopUser({ isOpen }) {
  if (!isOpen) return null;

  return (
    <PopUserSet>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <PopUserButton type="button">
        <a href="#popExit">Выйти</a>
      </PopUserButton>
    </PopUserSet>
  );
}
