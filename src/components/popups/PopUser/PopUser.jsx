import { Link } from "react-router-dom";
import {
  PopUserButton,
  PopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUser.styled";

export function PopUser() {
  const userName =
    JSON.parse(localStorage.getItem("userInfo"))?.name || "Пользователь";

  const userMail =
    JSON.parse(localStorage.getItem("userInfo"))?.login || "Пользователь";

  return (
    <PopUserSet>
      <PopUserSetName>{userName}</PopUserSetName>
      <PopUserSetMail>{userMail}</PopUserSetMail>
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
