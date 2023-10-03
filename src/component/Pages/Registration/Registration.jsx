import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Validation from "./RegistrationValidation";

export default function Registration() {
  const [values, setValues] = useState({
    name: "",
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
        <h2>РЕГИСТРАЦИЯ</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">
              <strong>Ваше имя</strong>
            </label>
            <input
              onChange={handleInput}
              type="text"
              placeholder="Введите ваше имя"
              name="name"
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">
              <strong>Почта</strong>
            </label>
            <input
              onChange={handleInput}
              type="email"
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
              onChange={handleInput}
              type="password"
              placeholder="Введите ваш пароль"
              name="password"
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success">Зарегистрироваться</button>
          <p>Вы соглашаетесь с нашими правилами (мы их еще не придумали)</p>
          <p>Если у Вас уже есть аккаунт</p>
          <NavLink to="/login">
            <button className="btn btn-default border">Войти в аккаунт</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
