import React from "react";
import UserHeader from "./UserHeader";
import styles from "./NewTeam.module.scss";
import Button from "./Button";
import Uploader from "./../Account/component/Uploader";
import AddForm from "./add/AddForm";
import { API_HOST_URL } from "../../../lib/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewTeam() {
  const navigate = useNavigate();
  const createGroup = () => {

    const group_name = document.getElementById("name").value;
    const jsn = {
      group: {
        name: group_name,
      },
    };

    axios
      .post(API_HOST_URL + "/groups", jsn)
      .then(function (res) {
        // navigate("/groups/" + res.data.data.id);
        navigate("/oneTeam");
      })
      .catch(function (err) {
        console.log(err);
        return false;
      });

    navigate("/newTeam");
  };

  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <form
        id="new_team"
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
              name="group[name]"
              id="name"
              placeholder="Название команды"
              value="12341234132"
              required
              autofocus
            />

            <textarea
              className={styles.team_description}
              name="comment"
              cols="40"
              rows="3"
              placeholder="Введите описание команды"
            ></textarea>
          </div>

        </div>
      </form>

      <button onClick={createGroup}>
        <Button text={"Создать команду"} />
      </button>

      <h2 className={styles.title}>Добавление участника</h2>
      <AddForm />
      <h2 className={`${styles.title} ${styles.title_gray}`}>
        Отправленные приглашения
      </h2>
    </div>
  );
}
