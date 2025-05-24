import "./App.css";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse";
import { PopExit } from "./components/popups/PopExit/PopExit";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Wrapper } from "./components/ui/Wrapper.styled";

function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
