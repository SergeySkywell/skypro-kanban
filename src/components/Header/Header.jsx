import { PopUser } from "../popups/PopUser/PopUser";
import { useState } from "react";
import {
  DarkLogo,
  HeaderBlock,
  HeaderButton,
  HeaderNav,
  HeaderPopUserSet,
  HeaderUser,
  LogoWrapper,
  StyledHeader,
} from "./Header.styled";
import { Container } from "../ui/Container.styled";
import { Link } from "react-router-dom";

export function Header({ setIsAuth }) {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <LogoWrapper>
            <a href="">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </LogoWrapper>

          <DarkLogo>
            <a href="">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </DarkLogo>

          <HeaderNav>
            <Link to={`/newcard`}>
              <HeaderButton id="btnMainNew">Создать новую задачу</HeaderButton>
            </Link>

            <HeaderUser onClick={() => setIsUserOpen((prev) => !prev)}>
              Ivan Ivanov
            </HeaderUser>
            {isUserOpen && (
              <HeaderPopUserSet id="user-set-target">
                <PopUser setIsAuth={setIsAuth} />
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
