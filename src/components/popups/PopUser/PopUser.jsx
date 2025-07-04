import { Link } from "react-router-dom";
import {
  PopUserButton,
  PopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUser.styled";

export function PopUser() {
  return (
    <PopUserSet>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <PopUserButton type="button">
        <Link to="exit">Выйти</Link>
      </PopUserButton>
    </PopUserSet>
  );
}
