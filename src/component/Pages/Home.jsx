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
import { animate, motion } from "framer-motion";
// для картинок https://github.com/react-icons/react-icons
// npm i node-sass
// для анимации npm i framer-motion

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: easing,
    },
  },
};

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.header variants={stagger}>
        <motion.div className="logo_wrapper" variants={header}>
          Form<span>form</span>
        </motion.div>
        <motion.div className="menu_container" variants={stagger}>
          <motion.span variants={header}>
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
          </motion.span>
          <motion.span variants={header}>
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
          </motion.span>
          <motion.span className="menu" variants={header}>
            <span></span>
            <span></span>
            <span></span>
          </motion.span>
        </motion.div>
      </motion.header>

      <motion.div
        className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easing }}
      >
        <div className="left_content_wrapper">
          <motion.h2>
            <motion.span
              variants={firstName}
              initial="initial"
              animate="animate"
              className="first"
            >
              <motion.span variants={letter}>Ф</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>р</motion.span>
              <motion.span variants={letter}>м</motion.span>
              <motion.span variants={letter}>ы</motion.span>

              <motion.span variants={letter} className="second">
                д
              </motion.span>
              <motion.span variants={letter}>л</motion.span>
              <motion.span variants={letter}>я</motion.span>
            </motion.span>

            <motion.span
              variants={lastName}
              initial="initial"
              animate="animate"
              className="last"
            >
              <motion.span variants={letter}>п</motion.span>
              <motion.span variants={letter}>р</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>в</motion.span>
              <motion.span variants={letter}>е</motion.span>
              <motion.span variants={letter}>д</motion.span>
              <motion.span variants={letter}>е</motion.span>
              <motion.span variants={letter}>н</motion.span>
              <motion.span variants={letter}>и</motion.span>
              <motion.span variants={letter}>я</motion.span>

              <motion.span variants={letter} className="second">
                с
              </motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>ц</motion.span>
              <motion.span variants={letter}>и</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>л</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>г</motion.span>
              <motion.span variants={letter}>и</motion.span>
              <motion.span variants={letter}>ч</motion.span>
              <motion.span variants={letter}>е</motion.span>
              <motion.span variants={letter}>с</motion.span>
              <motion.span variants={letter}>к</motion.span>
              <motion.span variants={letter}>и</motion.span>
              <motion.span variants={letter}>х</motion.span>

              <motion.span variants={letter} className="second">
                о
              </motion.span>
              <motion.span variants={letter}>п</motion.span>
              <motion.span variants={letter}>р</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>с</motion.span>
              <motion.span variants={letter}>о</motion.span>
              <motion.span variants={letter}>в</motion.span>
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Создавайте опросы с гибкой системой опросов <br /> и загружайте их в
            удобном вам формате.
          </motion.p>
          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Зарегестрироваться
              <IconContext.Provider
                value={{
                  color: "#14da8f",
                  size: "25px",
                }}
              >
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            <motion.div
              className="btn btn_secondary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Создать опрос
            </motion.div>
          </motion.div>

          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={stagger}>
              50+ Отзывов
              <IconContext.Provider
                value={{
                  color: "#fff",
                  size: "18px",
                }}
              >
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}>
                  <IoStar />
                </motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}>
                  <IoStar />
                </motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}>
                  <IoStar />
                </motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}>
                  <IoStar />
                </motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}>
                  <IoStar />
                </motion.span>
              </IconContext.Provider>
              <motion.p className="more_review" variants={star}>
                Более 50 пользователей пользуются нашим сервисом
              </motion.p>
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">
          <motion.img
            width={500}
            height={500}
            src={process.env.PUBLIC_URL + "/images/main_picture.jpg"}
            alt="главная картинка"
            initial={{x:200, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:.5, delay:0.8}}
          />
        </motion.div>
      </motion.div>

      <Card />
    </motion.div>
  );
}
