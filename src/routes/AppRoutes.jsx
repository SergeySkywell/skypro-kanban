import { Routes, Route } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { LogOutPage } from "../pages/LogOutPage";
import { LogInPage } from "../pages/LogInPage";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<CardPage />} />
        </Route>
        <Route path="exit" element={<LogOutPage />} />
      </Route>
      <Route path="login" element={<LogInPage setIsAuth={setIsAuth} />} />
      <Route path="register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
