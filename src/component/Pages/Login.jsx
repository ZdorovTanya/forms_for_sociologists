import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="wrapper">
      <div className="">
        <form action="">
          <div className="field">
            <label htmlFor="email">Почта</label>
            <input type="email" placeholder="Введите ваш Email" />
          </div>
          <div className="field">
            <label htmlFor="password">Пароль</label>
            <input type="password" placeholder="Введите ваш Email" />
          </div>

          <button className="btn btn-success">Войти</button>
          <p>Вы соглашаетесь с нашими правилами (мы их еще не придумали)</p>
          <button className="btn btn-default border">Создать аккаунт</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
