import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./login.module.css";
import { useAuth } from "../contexts/AuthContex";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@test.ru");
  const [password, setPassword] = useState("qwerty");

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app");
    },
    [isAuthenticated, navigate]
  );

  function submitHandle(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  return (
    <>
      <NavBar />
      <div className={styles["background-img"]}></div>
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={submitHandle}>
          <label>Enter email:</label>
          <input
            type="email"
            className={styles["input"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter password:</label>
          <input
            type="password"
            className={styles["input"]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={styles["login-btn"]}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
