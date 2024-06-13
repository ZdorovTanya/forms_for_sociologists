import React from "react";
import styles from "./User.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";

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

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <div className={styles.team_header}>
        <h2>Команды</h2>
        <NavLink to="/allTeam">
          <Button text={"Перейти"} />
        </NavLink>
      </div>
 
      <div className={styles.team}>
        <Slider {...settings}>
          {data.map((d) => (
            <NavLink to="/oneTeam">
              <motion.div className={styles.team_card}>
                <div className={styles.team_pic}>
                  <img src={d.img} alt="" className={styles.team_pic} />
                </div>
                <div className={styles.team_items}>
                  <p>{d.name}</p>
                  <p>{d.review}</p>

                  {/* <button className={styles.user_button}>Перейти</button> */}
                </div>
              </motion.div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
}
