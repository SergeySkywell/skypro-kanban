import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header.jsx";
import { Content } from "../components/Main/Content.jsx";
import { Wrapper } from "../components/ui/Wrapper.styled.js";

export const MainPage = ({ setIsAuth }) => {
  return (
    <Wrapper>
      <Header setIsAuth={setIsAuth} />
      <Content />
      <Outlet />
    </Wrapper>
  );
};
