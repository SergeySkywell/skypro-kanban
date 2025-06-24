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
import { useState } from "react";
import { signIn } from "../services/auth";

export function LogInPage({ setIsAuth }) {
  const navigate = useNavigate();

  // Состояние полей ввода

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  // Состояние ошибок полей ввода

  const [errors, setErrors] = useState({
    login: false,
    password: false,
  });

  // Cостояние текста ошибки, чтобы показать её пользователю

  const [error, setError] = useState("");

  // Функция валидации формы

  const validateForm = () => {
    const newErrors = { login: false, password: false };

    let isValid = true;

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Функция, которая отслеживает в полях изменения и меняет состояние компонента

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = await signIn({
        login: formData.login,
        password: formData.password,
      });

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#" onSubmit={handleSubmit}>
              <ModalInput
                $error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
                autoComplete="username"
              />
              <ModalInput
                $error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />

              <ModalBtnEnter id="btnEnter" type="submit">
                Войти
              </ModalBtnEnter>

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
