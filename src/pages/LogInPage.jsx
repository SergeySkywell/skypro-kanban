import { Link, Navigate, useNavigate } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper.styled";
import {
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  StyledLink,
} from "./LogInPage.styled";

export function LogInPage({ setIsAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <Wrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <StyledLink to="/">
                <ModalBtnEnter id="btnEnter" onClick={handleLogin}>
                  Войти
                </ModalBtnEnter>
              </StyledLink>

              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </Wrapper>
  );
}
