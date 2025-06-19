import { Link, useNavigate } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitStyled,
  PopExitTitle,
  PopExitYes,
} from "./LogOutPage.Styled";

export function LogOutPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <PopExitStyled id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes" onClick={handleLogout}>
                Да, выйти
              </PopExitYes>
              <PopExitNo id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
}
