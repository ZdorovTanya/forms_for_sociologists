import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import UserHeader from "../../Account/UserHeader";
import styles from "./SurveyLink.module.scss";
import Button from "../../Account/Button";

const data = [
  {
    img: `..//images/7.jpg`,
    name: "Как привить правильные привычки",
    review: `Насколько тяжело вставать по утрам и вести активный образ жизни`,
  },
];

export default function SurveyLink() {
  const [value, setValue] = useState("");
  const [copy, setCopy] = useState(false);

  const id = uuid().slice(0, 11).replace(/-/g, "");
  const [newId, setNewId] = useState("");

  const currentUrl = window.location.href;
  const formLink = `${currentUrl}/${newId}`;
  return (
    <div>
      <UserHeader />
      <div className="container mx-auto px-20">
        <div className="flex justify-between w-full border-b-2 border-gray-400 ">
          <NavLink to="/survey">
            <h2 className="text-gray-400">Настройки опроса</h2>
          </NavLink>
          <NavLink to="/surveys/content/1">
            <h2 className="text-gray-400">Конструктор опроса</h2>
          </NavLink>
          <NavLink to="/surveys/result">
            <h2 className="text-gray-400">Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2>Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>

      <div className={styles.survey}>
        <div className={styles.survey_items}>
          <div className={styles.survey_item}>
            {data.map((d) => (
              <div className={styles.survey_item}>
                <div href="" className={styles.survey_image}>
                  <img src={d.img} alt="" className="" />
                </div>

                <div className={styles.survey_desc}>
                  <div href="" className={styles.survey_name}>
                    {d.name}
                  </div>
                  <div href="" className={styles.survey_review}>
                    {d.review}
                  </div>
                </div>
                <div className="out"></div>
              </div>
            ))}
          </div>

          {/* <Button text={"Скопировать ссылку на опрос"} /> */}
          {/* нужно при нажатии на кнопку копировать ссылку на опрос, Ариф сказал генерировать р
          андомную строку по публичному id на каждый опрос, что с ней делать потом - хз */}
          <div className={styles.app}>
            <div className={styles.input_group}>
              {/* <i class="bi bi-link-45deg"></i> */}
              {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
              <CopyToClipboard
                text={value}
                onMouseDown={() => setValue(formLink)}
                onCopy={() => setCopy(true)}
              >
                <button
                  className={`${copy ? styles.copied : styles.copy}`}
                  onClick={() => setNewId(id)}
                >
                  {copy
                    ? "Ссылка на опрос скопирована"
                    : "Скопировать ссылку на опрос"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <h3>{formLink}</h3>
        </div>
      </div>
    </div>
  );
}
