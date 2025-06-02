import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitStyled,
  PopExitTitle,
  PopExitYes,
} from "./LogOutPage.Styled";

export function LogOutPage() {
  return (
    <PopExitStyled id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitYes>
              <PopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
}
