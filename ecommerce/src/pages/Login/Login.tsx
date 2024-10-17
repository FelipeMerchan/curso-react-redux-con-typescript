import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

export const Login = () => {
  /* Esto debería ser un custom hook, esta no es la forma profesional
  de manejar formularios: */
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userData.email.trim() === "" || userData.password.trim() === "") return;

    localStorage.setItem("userLogin", JSON.stringify(userData.email));
    navigate("/dashboard");
  };

  return (
    <div className={styles.containerLogin}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formControlLogin}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControlLogin}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
