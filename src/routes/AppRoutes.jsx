import { Routes, Route } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { LogOutPage } from "../pages/LogOutPage";
import { LogInPage } from "../pages/LogInPage";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="card/:id" element={<CardPage />} />
      </Route>
      <Route path="exit" element={<LogOutPage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
