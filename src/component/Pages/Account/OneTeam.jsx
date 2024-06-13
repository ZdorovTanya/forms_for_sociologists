import React, { useState } from "react";
import UserHeader from "./UserHeader";
import styles from "./OneTeam.module.scss";
import Button from "./Button";
import DropDown from "./dropdown/DropDown";
import DropDownGroup from "./dropdown/DropDowmGroup";

import { NavLink } from "react-router-dom";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { MdGroupAdd } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { EditPostForm } from "./edit/EditPostForm";
import { EditUserImage } from "./edit/EditUserImage";
import { IoSettingsSharp } from "react-icons/io5";

const info = [
  {
    id: "0",
    name: "ПИ/б-20",
    img: `..//images/pi.jpg`,
    review: `Институт информационных технологий. Кафедра «Информационные системы». Профиль: Геоинформационные технологии. Код:09.03.03. Курируемая группа.`,
    date: "06.06.2024",
  },
];

const person = [
  {
    id: "0",
    name: "Ксения Борисовна Соколова",
    img: `..//images/kurator.jpg`,
    review: `Куратор`,
    role: "",
    email: "Sokolova.ksenia@mail.ru",
  },
  {
    id: "1",
    name: "Григорьев Вячеслав Константинович",
    img: `..//images/slavik.jpg`,
    review: `Староста 1`,
    role: "",
    email: "grenebris.slavs@mail.ru",
  },
  {
    id: "2",
    name: "Здоровило Татьяна Андреевна",
    img: `..//images/tanya.jpg`,
    review: `Староста 2`,
    role: "",
    email: "zdorovilo.tanya@mail.ru",
  },
];

const team = [
  {
    id: "0",
    name: "ПИ/б-20-1-о",
    img: `..//images/pi1.jpg`,
    review: `Первая подгруппа. Староста: Григорьев Вячеслав Константинович.`,
  },
  {
    id: "1",
    name: "ПИ/б-20-2-о",
    img: `..//images/pi2.jpg`,
    review: `Вторая подгруппа. Староста: Здоровило Татьяна Андреевна.`,
  },
];

const team_survey = [
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

export default function OneTeam() {
  const [selected, setSelected] = useState(<CgMoreVerticalAlt />);
  const [selectedGroup, setSelectedGroup] = useState(<CgMoreVerticalAlt />);
  // const [selectedTeam, setSelectedTeam] = useState(<MdGroupAdd />);
  const [people, setPeople] = useState(person);
  const [teams, setTeams] = useState(team);
  const [show, showEditForm] = useState(false);
  const [showImg, showEditImg] = useState(false);

  const handleDeleteItem = (id) => {
    setPeople(people.filter((obj) => obj.id !== id));
  };

  const handleDeleteTeam = (id) => {
    setTeams(teams.filter((obj) => obj.id !== id));
  };

  const handleEditFormShow = () => {
    showEditForm(true);
  };
  const handleEditFormHide = () => {
    showEditForm(false);
  };
  const handleEditImgShow = () => {
    showEditImg(true);
  };
  const handleEditImgHide = () => {
    showEditImg(false);
  };

  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.team_description}>
        {show && <EditPostForm handleEditFormHide={handleEditFormHide} />}
        {showImg && <EditUserImage handleEditImgHide={handleEditImgHide} />}
        <div className={styles.team_item}>
          <div href="" className={styles.team_image}>
            <img src="./../../../..//images/pi.jpg" alt="" className="" />
            <CiEdit className={styles.edit_foto} onClick={handleEditImgShow} />
            {/* <FaTrash className={styles.delete_foto} /> */}
          </div>
          <div className={styles.team_text}>
            <div className={styles.info}>
              {info.map((p) => (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="">{p.name}</h3>
                    <IoSettingsSharp
                      className={styles.edit_info}
                      onClick={handleEditFormShow}
                    />
                  </div>
                  <div className={styles.team_desc}>{p.review}</div>
                  <div className={styles.team_date}>
                    <p>Дата создания команды</p>
                    <h4>{p.date}</h4>
                  </div>
                  <div className={styles.delete_team}>
                    <button>Удалить команду</button>
                  </div>
                </>
              ))}
            </div>

            {/* <Button text={"Сохранить"} /> */}
          </div>
        </div>

        <div className={styles.team_partisipants}>
          <div className={styles.team_title}>
            <h2>Участники команды</h2>
            <NavLink to="/addPart">
              <Button text={"Добавить участника"} />
            </NavLink>
          </div>

          <div>
            <h3 className="w-1/2 mb-8 text-lg text-slate-500">
              Добавляйте других пользователей в свою команду для помощи в работе
              над опросами. Назначайте им роли{" "}
              <abbr title="Обладает всеми правами ">администратора</abbr> или{" "}
              <abbr title="Ограниченные права ">редактора</abbr> для
              разграничения доступа.
            </h3>
          </div>

          <div className={styles.survey_items}>
            {people.map((p) => (
              <div key={p.id} className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <div href="" className={styles.survey_image}>
                    <img src={p.img} alt="" className="" />
                    <DropDown
                      id={p.id}
                      className={styles.choice_role}
                      selected={
                        selected[p.id] ? selected[p.id] : <CgMoreVerticalAlt />
                      }
                      fullSelected={selected}
                      setSelected={setSelected}
                    />
                  </div>

                  <div className={styles.row}>
                    <div href="" className={styles.survey_name}>
                      {p.name}
                    </div>

                    <div className={styles.delete}>
                      <FaTrash onClick={() => handleDeleteItem(p.id)} />
                    </div>
                  </div>

                  <div href="" className={styles.survey_email}>
                    {p.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.team_team}>
          <div className={styles.team_title}>
            <h2>Группы участников</h2>
            <NavLink to="/addPart">
              <Button text={"Добавить группу"} />
            </NavLink>
          </div>

          <div className="flex justify-between">
            <h3 className="w-1/2 mb-8 text-lg text-slate-500">
              Добавляйте существующие команды в вашу или создавайте новую. Вы
              можете назначить роли:{" "}
              <abbr title="Обладает всеми правами ">администратора</abbr>,{" "}
              <abbr title="Ограниченные права ">редактора</abbr> или{" "}
              <abbr title="Только прохождение опроса ">читателя</abbr> для
              отдельного участника или целой группы.
            </h3>
            <NavLink to="/newGroup" className="mt-6">
              <Button text={"Создать группу"} />
            </NavLink>
          </div>

          <div className={styles.survey_items}>
            {teams.map((t) => (
              <NavLink to="/oneGroup">
                <div key={t.id} className={styles.survey_item}>
                  <div className={styles.survey_item}>
                    <div href="" className={styles.survey_image}>
                      <img src={t.img} alt="" className="" />
                      <DropDownGroup
                        id={t.id}
                        className={styles.choice_role}
                        selected={
                          selectedGroup[t.id] ? (
                            selectedGroup[t.id]
                          ) : (
                            <CgMoreVerticalAlt />
                          )
                        }
                        fullSelected={selectedGroup}
                        setSelected={setSelectedGroup}
                      />
                    </div>
                    <div className={styles.team_name_title}>
                      <div href="" className={styles.survey_name}>
                        {t.name}
                      </div>
                      <div className={styles.delete}>
                        <FaTrash onClick={() => handleDeleteTeam(t.id)} />
                      </div>
                    </div>

                    <div href="" className={styles.survey_review}>
                      {t.review}
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={styles.team_survey}>
          <div className={styles.team_title}>
            <h2>Опросы команды</h2>
            <NavLink to="/surveys">
              <Button text={"Создать опрос"} />
            </NavLink>
          </div>

          <div className={styles.survey_items}>
            {team_survey.map((ts) => (
              <div className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <div href="" className={styles.survey_image}>
                    <img src={ts.img} alt="" className="" />
                  </div>

                  <div className={styles.survey_title_go}>
                    <div href="" className={styles.survey_name}>
                      {ts.name}
                    </div>
                    <NavLink to="/survey">
                      <GoArrowUpRight className={styles.survey_go} />
                    </NavLink>
                  </div>

                  <div href="" className={styles.survey_review}>
                    {ts.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
