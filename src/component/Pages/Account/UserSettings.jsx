import React from "react";
import UserHeader from "./UserHeader";
import Uploader from "./../Account/component/Uploader";
import styles from "./UserSetting.module.scss";
import Button from "./Button";

function UserSettings() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.wrapper_wrapper}>
        <div className={styles.right}>
          <form
            id="new_team"
            action="/apply/"
            method="POST"
            className={styles.form}
          >
            <Uploader />

            <div className={styles.right_input}>
              <div className={styles.text_input}>
                <input
                  className={styles.team_name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Имя пользователя"
                  required
                  autofocus
                />
                <input
                  className={styles.team_name}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Почта пользователя"
                  required
                  autofocus
                />
                <input
                  className={styles.team_name}
                  type="data"
                  name="data"
                  id="data"
                  placeholder="Дата рождения"
                  required
                  autofocus
                />
              </div>

              <button type="submit">
                <Button text={"Сохранить"} />
              </button>
            </div>
          </form>
        </div>
        <div className={styles.left}>
          <form
            id="new_team"
            action="/apply/"
            method="POST"
            className={styles.form}
          >
            <div className={styles.right_input}>
              <div className={styles.text_input}>
                <input
                  className={styles.team_name}
                  type="password"
                  name="name"
                  id="name"
                  placeholder="Введите старый пароль"
                  required
                  autofocus
                />
                <input
                  className={styles.team_name}
                  type="password"
                  name="name"
                  id="name"
                  placeholder="Введите новый пароль"
                  required
                  autofocus
                />
                <input
                  className={styles.team_name}
                  type="password"
                  name="name"
                  id="name"
                  placeholder="Подтвердите новый пароль"
                  required
                  autofocus
                />
              </div>

              <button type="submit">
                <Button text={"Изменить пароль"} />
              </button>
            </div>
          </form>
          <form
            id="new_team"
            action="/apply/"
            method="POST"
            className={`${styles.form} ${styles.delete}`}
          >
            <div className={styles.question}>
              <h3>Вы уверены что хотите удалить аккаунт?</h3>
              <div className={styles.shure}>Вы не сможете изменить решение</div>
            </div>
            <div className={styles.right_input}>
              <button type="submit">
                <Button text={"Удалить аккаунт"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
