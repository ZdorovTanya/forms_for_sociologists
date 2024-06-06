import React from "react";
import UserHeader from "./UserHeader";
import styles from "./AllTeam.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    name: "Поход Инжир",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "Группа Пи/б-20-1-о",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "Шашлыки",
    img: `..//images/2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
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
            В них вы можете добавлять участником и назначать роли, а также
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
