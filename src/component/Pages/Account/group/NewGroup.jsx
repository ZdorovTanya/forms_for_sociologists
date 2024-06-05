import React from "react";
import UserHeader from "../UserHeader";
import styles from "../NewTeam.module.scss";
import Button from "../Button";
import Uploader from "../component/Uploader";
import AddForm from "../add/AddForm";

export default function NewTeam() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <form
        id="new_team"
        action="/apply/"
        method="POST"
        className={styles.form}
      >
        <div className={styles.left}>
          <Uploader />
        </div>

        <div className={styles.right_input}>
          <div className={styles.text_input}>
            <input
              className={styles.team_name}
              type="text"
              name="name"
              id="name"
              placeholder="Название группы"
              required
              autofocus
            />

            <textarea
              className={styles.team_description}
              name="comment"
              cols="40"
              rows="3"
              placeholder="Введите описание группы"
            ></textarea>
          </div>

          <button type="submit">
            <Button text={"Создать группу"} />
          </button>
        </div>
      </form>

      <h2 className={styles.title}>Добавление участника</h2>
      <AddForm />
      <h2 className={`${styles.title} ${styles.title_gray}`}>
        Отправленные приглашения
      </h2>
    </div>
  );
}
