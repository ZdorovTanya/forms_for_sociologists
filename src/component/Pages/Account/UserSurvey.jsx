import React from "react";
import styles from "./User.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    img: `..//images/7.jpg`,
    name: "Как привить правильные привычки",
    review: `Насколько тяжело вставать по утрам и вести активный образ жизни`,
  },
  {
    img: `..//images/8.jpg`,
    name: "Опрос 2",
    review: `Как начать регулярно заниматься спортом`,
  },
  {
    img: `..//images/9.jpg`,
    name: "Как пить больше воды",
    review: `Сколько пить воды и почему это так важно`,
  },

];

export default function UserSurvey() {
  return (
    <div>
      <h2 className={styles.survey_header}>Все опросы</h2>

      <div className={styles.survey_items}>
        {data.map((d) => (
          <div className={styles.survey_item}>
            <div className={styles.survey_item}>
              <div href="" className={styles.survey_image}>
                <img src={d.img} alt="" className="" />
              </div>

              <div className={styles.survey_title_go}>
                <div href="" className={styles.survey_name}>
                  {d.name}
                </div>
                <NavLink to="/survey">
                  <GoArrowUpRight className={styles.survey_go} />
                </NavLink>
              </div>

              <div href="" className={styles.survey_review}>
                {d.review}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
