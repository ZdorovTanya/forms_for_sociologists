import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.scss";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="wrapper">
      <div className="">
        <h2>ВХОД</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">
              <strong>Почта</strong>
            </label>
            <input
              type="email"
              onChange={handleInput}
              placeholder="Введите ваш Email"
              name="email"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="password">
              <strong>Пароль</strong>
            </label>
            <input
              type="password"
              onChange={handleInput}
              placeholder="Введите ваш пароль"
              name="password"
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success">
            Войти
          </button>
          <p>Вы соглашаетесь с нашими правилами (мы их еще не придумали)</p>
          <p>Если у вас еще нет аккаунта</p>
          <NavLink to="/registration">
            <button className="btn btn-default border">Создать аккаунт</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
