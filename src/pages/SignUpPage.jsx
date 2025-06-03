import { Wrapper } from "../components/ui/Wrapper.styled";
import {
  ContainerSignUp,
  Modal,
  ModalBlock,
  ModalBtnSignupEnt,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
} from "./SignUpPage.styled";

export function SignUpPage() {
  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalBtnSignupEnt id="SignUpEnter">
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </ModalBtnSignupEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
