import React, { useState } from "react";
import styles from "./SignInSignUp.module.scss";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import axios from "axios";

export default function SignInSignUp() {
  const [btnState, setBtnState] = useState(false);
  const [btnState2, setBtnState2] = useState(false);

  // const token = document.querySelector('[name=csrf-token]').content

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  function handleClick2() {
    setBtnState2((btnState2) => !btnState2);
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${btnState ? styles.signUpMode : ""} 
        ${btnState2 ? styles.signUpMode2 : ""}
        `}
      >
        <div className={styles.SigninSignup}>
          <form
            action="https://hard-dodo-96.telebit.io/login"
            method="post"
            className={styles.SignInForm}
          >
            <h2 className={styles.title}>Войти</h2>
            <div className={styles.inputField}>
              <i className={styles.FaUser}></i>
              <input
                className={styles.inputS}
                type="text"
                placeholder="Ваша почта"
                name="user[email]"
                required

              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.FaLock}></i>
              <input
                className={styles.inputS}
                type="password"
                placeholder="Ваш пароль"
                name="user[password]"
                required

              />
            </div>
            <input type="submit" value="Войти" className={styles.btn} />
            {/* <p className={styles.socialText}>Или войдите с помощью соцсетей</p> */}
            <div className={styles.socialMedia}>
              {/* <a href="#" className={styles.socialIcon}></a> */}
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponseDecoded);

                  // axios.defaults.headers.common['X-CSRF-TOKEN'] = token
                  axios({
                    method: "post",
                    url: "https://hard-dodo-96.telebit.io/users/auth/google_oauth2",
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <p className={styles.accountText}>
              Нет аккаунта?
              <a href="#" onClick={handleClick2} className={styles.signUpBtn2}>
                Войти
              </a>
            </p>
          </form>

          <form
            action="https://hard-dodo-96.telebit.io/signup"
            method="post"
            className={styles.SignUpForm}
          >
            <h2 className={styles.title}>Регистрация</h2>
            <div className={styles.inputField}>
              <i className={styles.FaUser}></i>
              <input
                className={styles.inputS}
                type="text"
                placeholder="Ваше имя"
                name="user[name]"
                required
              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.envelope}></i>
              <input
                className={styles.inputS}
                type="email"
                placeholder="Ваша почта"
                name="user[email]"
                required
              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.FaLock}></i>
              <input
                className={styles.inputS}
                type="password"
                placeholder="Ваш пароль"
                name="user[password]"
                required
                minlength="6"
              />
            </div>
            <input type="submit" value="Регистрация" className={styles.btn} />
            <div className={styles.socialMedia}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponseDecoded);

                  // axios.defaults.headers.common['X-CSRF-TOKEN'] = token
                  axios({
                    method: "get",
                    url: "https://hard-dodo-96.telebit.io/auth/google_oauth2/callback",
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <p className={styles.accountText}>
              Есть аккаунт?
              <a href="#" onClick={handleClick2} className={styles.signInBtn2}>
                Войти
              </a>
            </p>
          </form>
        </div>
        <div className={styles.panelContainer}>
          <div className={`${styles.panel} ${styles.leftPanel}`}>
            <div className={styles.content}>
              <h3 className={styles.panelTitle}>Уже зарегистрированны?</h3>
              <p className={styles.panelText}>
                Войдите с помощью логина и пароля или с помощью Google
              </p>
              <button
                onClick={handleClick}
                id="sigInBtn"
                className={styles.btn}
              >
                Вход
              </button>
            </div>
            <img src="/images/exit.png" className={styles.image} alt="" />
          </div>
          <div className={`${styles.panel} ${styles.rightPanel}`}>
            <div className={styles.content}>
              <h3 className={styles.panelTitle}>
                Не зарегистрированны?
              </h3>
              <p className={styles.panelText}>
                Создайте аккаунт или зайдите с помощью Google
              </p>
              <button
                onClick={handleClick}
                id="signUpBtn"
                className={styles.btn}
              >
                Регистрация
              </button>
            </div>
            <img
              src="/images/registration.png"
              className={styles.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
