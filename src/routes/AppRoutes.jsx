import { Routes, Route } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { LogOutPage } from "../pages/LogOutPage";
import { LogInPage } from "../pages/LogInPage";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { NewCardPage } from "../pages/NewCardPage";

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    return !!userInfo;
  });

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage setIsAuth={setIsAuth} />}>
          <Route path="card/:id" element={<CardPage />} />
          <Route path="newcard" element={<NewCardPage />} />
          <Route path="exit" element={<LogOutPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route path="login" element={<LogInPage setIsAuth={setIsAuth} />} />
      <Route path="register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
