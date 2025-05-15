import { PopUser } from "../popups/PopUser/PopUser";
import { useState } from "react";

export function Header() {
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <span
              className="header__user _hover02"
              onClick={() => setIsUserOpen((prev) => !prev)}
            >
              Ivan Ivanov
            </span>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            ></div>
            <PopUser isOpen={isUserOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
}
