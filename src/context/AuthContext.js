import { createContext, useState } from "react";
import { signIn, signUp } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userInfo");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuth = !!user;

  const login = async (userData) => {
    const userInfo = await signIn(userData);
    setUser(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const register = async (userData) => {
    const userInfo = await signUp(userData);
    setUser(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
