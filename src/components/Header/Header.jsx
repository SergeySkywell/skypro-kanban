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

export function Header() {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <LogoWrapper>
            <a href="">
              <img src="images/logo.png" alt="logo" />
            </a>
          </LogoWrapper>

          <DarkLogo>
            <a href="">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </DarkLogo>

          <HeaderNav>
            <HeaderButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser onClick={() => setIsUserOpen((prev) => !prev)}>
              Ivan Ivanov
            </HeaderUser>
            <HeaderPopUserSet id="user-set-target"></HeaderPopUserSet>
            <PopUser isOpen={isUserOpen} />
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
