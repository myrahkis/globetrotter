/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Test",
  email: "test@test.ru",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/",
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
    //   console.log(FAKE_USER);
      setUser(FAKE_USER);
      setIsAuthenticated(true);
    }

    // console.log(email, password);
  }

  function logout() {
    setUser({});
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("AuthContext error!");

  return context;
}

export { AuthProvider, useAuth };
