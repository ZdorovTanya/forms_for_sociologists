import React from "react";
import UserHeader from "./UserHeader";
import styles from "./AllTeam.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    name: "ПИ/б-20",
    img: `..//images/pi.jpg`,
    review: `Институт информационных технологий. Кафедра «Информационные системы». Профиль: Геоинформационные технологии. Код:09.03.03. Курируемая группа.  `,
  },
  {
    name: "ИВТ/б-20",
    img: `..//images/is2.jpg`,
    review: `Институт информационных технологий. Кафедра «Информационные технологии и компьютерные системы. Профиль: Высокопроизводительные вычислительные системы. Код:09.04.01  `,
  },
  {
    name: "ИС/б-20",
    img: `..//images/ivt.jpg`,
    review: `Институт информационных технологий. Выпускающая кафедра «Информационные системы». Профиль: Интеллектуальные информационные системы. Код:09.04.02.  `,
  },
  {
    name: "ИС/б-21",
    img: `..//images/is.jpg`,
    review: `Институт информационных технологий. Кафедра «Информационные системы». Профиль: Интеллектуальные веб-ориентированные информационные системы и технологии. Код:09.03.02.  `,
  },
];

export default function AllTeam() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.survey}>
        <div className={styles.team_header}>
          <h2>Все команды</h2>
          <NavLink to="/newTeam">
            <Button text={"Создать команду"} />
          </NavLink>
        </div>

        <div>
          <h3 className="w-1/2 mb-8 text-xl text-slate-500">
            Создавайте команды для более удобной совместной работы над опросами.
            В них вы можете добавлять участников и назначать роли, а также
            формировать группы для работы и прохождения опросов.{" "}
          </h3>
        </div>

        <NavLink to="/oneTeam">
        <div className={styles.survey_items}>
          {data.map((d) => (
            <div className={styles.survey_item}>
              <div className={styles.survey_item}>
                <div href="" className={styles.survey_image}>
                  <img src={d.img} alt="" className="" />
                  <NavLink to="/oneTeam">
                    <GoArrowUpRight
                      className={`${styles.choice_role} ${styles.bc}`}
                    />
                  </NavLink>
                </div>
                <div href="" className={styles.survey_name}>
                  {d.name}
                </div>
                <div href="" className={styles.survey_review}>
                  {d.review}
                </div>
                {/* <NavLink to="/oneTeam">
                  <Button text={"Перейти"} />
                </NavLink> */}
              </div>
            </div>
          ))}
        </div>
        </NavLink>
      </div>
    </div>
  );
}
