import React from "react";
import styles from "./SurveyHome.module.scss";
import Button from "../Account/Button";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "Создавайте опрос",
    description:
      "Внесите всю необходимую информацию, укажите название, описание и изображение для опроса",
  },
  {
    title: "Задавайте настройки опроса",
    description: "Сделайте свой опрос таким, каким вам это нужно",
  },
  {
    title: "Постройте форму с помощью конструктора",
    description:
      "Выбирете тот тип отображения вопроса, который максимально расскроет его",
  },
  {
    title: "Распространяйте опрос",
    description: "Скопируйте ссылку и отправте ее своим респондентам",
  },
  {
    title: "Анализируйте и сохраняйте ответы",
    description:
      "Смотрите аналитику опроса и скачивайте статистику в удобном формате",
  },
];

export default function SurveyHomeCard() {
  return (
    <div>
      <div className={styles.title}>
        <h2>Наши возможности</h2>
        <NavLink to="/survey">
          <Button text={"Создать опрос"} />
        </NavLink>
      </div>

      <div className={styles.service_card}>
        {data.map((d) => (
          <div className={styles.card}>
            <h3>{d.title}</h3>
            <h4>{d.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
