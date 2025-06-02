import { Routes, Route } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { LogOutPage } from "../pages/LogOutPage";
import { LogInPage } from "../pages/LogInPage";
import { SignInPage } from "../pages/SignInPage";
import { MainPage } from "../pages/MainPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="card/:id" element={<CardPage />} />
      </Route>
      <Route path="exit" element={<LogOutPage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="register" element={<SignInPage />} />
    </Routes>
  );
};
