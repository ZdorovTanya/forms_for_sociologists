import React from "react";
import styles from "./User.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    img: `..//images/subbotnik.jpg`,
    name: "Субботник 24 апреля",
    review: `Организационные вопросы. Распределение зон работы, время сборов.`,
  },
  {
    img: `..//images/practica.jpg`,
    name: "Летняя практика",
    review: `Как прошла ваша трудовая практика. Впечатления от компаний и дальнейшее трудоустройство.`,
  },
  {
    img: `..//images/volonter.jpg`,
    name: "День волонтера",
    review: `Примите участвие в помощи пенсионерам и нуждающимся гражданам.`,
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
