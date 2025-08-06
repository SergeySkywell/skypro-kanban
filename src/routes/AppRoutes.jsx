import { Routes, Route } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { LogOutPage } from "../pages/LogOutPage";
import { LogInPage } from "../pages/LogInPage";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage";
import { useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import { NewCardPage } from "../pages/NewCardPage";
import { AuthContext } from "../context/AuthContext";

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<CardPage />} />
          <Route path="newcard" element={<NewCardPage />} />
          <Route path="exit" element={<LogOutPage />} />
        </Route>
      </Route>
      <Route path="login" element={<LogInPage />} />
      <Route path="register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
