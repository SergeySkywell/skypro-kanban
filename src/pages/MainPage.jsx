import { Header } from "../components/Header/Header.jsx";
import { Content } from "../components/Main/Content.jsx";
import { Wrapper } from "../components/ui/Wrapper.styled.js";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};
