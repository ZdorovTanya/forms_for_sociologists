import React, { useState } from "react";
import styles from "./SignInSignUp.module.scss";

export default function SignInSignUp() {
  const [btnState, setBtnState] = useState(false);
  const [btnState2, setBtnState2] = useState(false);

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
        ${btnState2 ? styles.signUpMode2 : "" }
        `}
      >
        <div className={styles.SigninSignup}>
          <form action="#" className={styles.SignInForm}>
            <h2 className={styles.title}>Войти</h2>
            <div className={styles.inputField}>
              <i className={styles.FaUser}>K</i>
              <input
                className={styles.inputS}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.FaLock}></i>
              <input
                className={styles.inputS}
                type="password"
                placeholder="Ваш пароль"
              />
            </div>
            <input type="submit" value="SignIn" className={styles.btn} />
            <p className={styles.socialText}>Или войдите с помощью соцсетей</p>
            <div className={styles.socialMedia}>
              {/* <a href="#" className={styles.socialIcon}></a> */}
              тут могут быть иконки соцсетей
            </div>
            <p className={styles.accountText}>
              Нет аккаунта?
              <a href="#" onClick={handleClick2} className={styles.signUpBtn2}>
                Sign up
              </a>
            </p>
          </form>

          <form action="#" className={styles.SignUpForm}>
            <h2 className={styles.title}>Регистрация</h2>
            <div className={styles.inputField}>
              <i className={styles.FaUser}></i>
              <input
                className={styles.inputS}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.envelope}></i>
              <input
                className={styles.inputS}
                type="text"
                placeholder="Ваша почта"
              />
            </div>
            <div className={styles.inputField}>
              <i className={styles.FaLock}></i>
              <input
                className={styles.inputS}
                type="password"
                placeholder="Ваш пароль"
              />
            </div>
            <input type="submit" value="SignUp" className={styles.btn} />
            <p className={styles.socialText}>Или войдите с помощью соцсетей</p>
            <div className={styles.socialMedia}>
              тут могут быть иконки соцсетей
            </div>
            <p className={styles.accountText}>
              Есть аккаунт?
              <a href="#" onClick={handleClick2} className={styles.signInBtn2}>
                Sign in
              </a>
            </p>
          </form>
        </div>
        <div className={styles.panelContainer}>
          <div className={`${styles.panel} ${styles.leftPanel}`}>
            <div className={styles.content}>
              <h3 className={styles.panelTitle}>Уже зарегистрированны?</h3>
              <p className={styles.panelText}>
                Уважаю, братан. Так ты это, заходи если чо, щас анимация будет
                крутая
              </p>
              <button
                onClick={handleClick}
                id="sigInBtn"
                className={styles.btn}
              >
                Войти
              </button>
            </div>
            <img
              src="/images/main_picture.jpg"
              className={styles.image}
              alt=""
            />
          </div>
          <div className={`${styles.panel} ${styles.rightPanel}`}>
            <div className={styles.content}>
              <h3 className={styles.panelTitle}>Не зарегистрированны?</h3>
              <p className={styles.panelText}>
                Не уважаю, братан. Так ты это, заходи если чо, щас анимация
                будет крутая
              </p>
              <button
                onClick={handleClick}
                id="signUpBtn"
                className={styles.btn}
              >
                Зарегитрироваться
              </button>
            </div>
            <img
              src="/images/main_picture.jpg"
              className={styles.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
