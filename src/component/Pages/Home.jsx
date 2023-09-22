import React from "react";
import "./Home.scss";
import { FaBehance, FaDribbble } from "react-icons/fa";
import {
  IoMailOpenOutline,
  IoChevronForwardCircle,
  IoStar,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import Card from "./Card";
// для картинок https://github.com/react-icons/react-icons
// npm i node-sass
// для анимации npm i framer-motion

export default function Home() {
  return (
    <>
      <header>
        <div className="logo_wrapper">
          Form<span>form</span>
        </div>
        <div className="menu_container">
          <span>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
                className: "icons_container",
              }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              <div className="icon">
                <FaDribbble />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
              }}
            >
              <div className="icon">
                <IoMailOpenOutline />
                user@hismail.com
              </div>
            </IconContext.Provider>
          </span>
          <span className="menu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className="content_wrapper">
        <div className="left_content_wrapper">
          <h2>
            <span>
              Формы <span className="second"> для проведения</span>
            </span>
            <span>
              социологических <span className="second">опросов</span>{" "}
            </span>
          </h2>
          <p>
            Создавайте опросы с гибкой системой опросов <br /> и загружайте их в
            удобном вам формате.
          </p>
          <div className="btn_group">
            <div className="btn btn_primary">
              Зарегестрироваться
              <IconContext.Provider
                value={{
                  color: "#14da8f",
                  size: "25px",
                }}
              >
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </div>
            <div className="btn btn_secondary">Создать опрос</div>
          </div>
          <div className="review_container">
            <p className="total_review">
              50+ Отзывов
              <IconContext.Provider
                value={{
                  color: "#fff",
                  size: "18px",
                }}
              >
                <span>
                  <IoStar />
                </span>
                <span>
                  <IoStar />
                </span>
                <span>
                  <IoStar />
                </span>
                <span>
                  <IoStar />
                </span>
                <span>
                  <IoStar />
                </span>
              </IconContext.Provider>
              <p>Более 50 пользователей пользуются нашим сервисом</p>
            </p>
          </div>
        </div>

        <div className="right_content_wrapper">
          <img
            width={500}
            height={500}
            src={process.env.PUBLIC_URL + "/images/main_picture.jpg"}
            alt="главная картинка"
          />
        </div>
      </div>

      <Card />
    </>
  );
}
