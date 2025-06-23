import { Link, useNavigate } from "react-router-dom";
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
import { useState } from "react";
import { signUp } from "../services/auth";

export function SignUpPage({ setIsAuth }) {
  const navigate = useNavigate();

  // Состояние полей ввода

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // Состояние ошибок полей ввода
  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  // Cостояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации формы
  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

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

  // Функция отправки формы

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Если у нас форма не прошла валидацию, то дальше не продолжаем

      return;
    }
    try {
      // Чтобы не писать две разных функции, выберем нужный запрос через тернарный оператор

      const data = await signUp(formData);

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
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" onSubmit={handleSubmit}>
              <ModalInput
                $error={errors.name}
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
              <ModalInput
                $error={errors.login}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
                autoComplete="username"
              />
              <ModalInput
                $error={errors.password}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <p style={{ color: "red" }}>{error}</p>
              <ModalBtnSignupEnt id="SignUpEnter">
                Зарегистрироваться
              </ModalBtnSignupEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
