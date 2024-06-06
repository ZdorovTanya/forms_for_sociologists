import React, { useState } from "react";
import styles from "./AddPartisipiant.module.scss";

export default function AddForm() {
  const [copy, setCopy] = useState(false);
  return (
    <div className={styles.form_wrapper}>
      <form >
        <input
          type="email"
          placeholder="Введите email участника, которго вы хотите добавить в команду"
          name=""
          id=""
        />
        <button type="submit">Отправить приглашение</button>
        {/* <button className={`${copy ? styles.copied : styles.copy}`} onClick={() => setCopy(true)}>
          {copy ? "Ссылка на опрос скопирована" : "Скопировать ссылку на опрос"}
        </button> */}
      </form>

    </div>
  );
}
