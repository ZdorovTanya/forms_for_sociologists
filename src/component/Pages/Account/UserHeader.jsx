import React from "react";
import styles from "./UserHeader.module.scss";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export default function UserHeader() {
  return (
    <div>
      <div className={styles.header}>
        <NavLink to="/">
          <div className={styles.logo_wrapper}>
            F<span>F</span>
          </div>
        </NavLink>

        {/* <NavLink to="/newTeam" className={styles.links}>
          Создать команду
        </NavLink> */}
        <NavLink to="/surveys" className={styles.links}>
          Создать опрос
        </NavLink>
        <NavLink to="/allTeam" className={styles.links}>
          Все команды
        </NavLink>

        <div className="flex items-center">
          <NavLink to="/user">
            <div className={styles.userPanel}>
              <FaUserAlt />
            </div>
          </NavLink>

          <ImExit className="ml-4 size-6 text-gray-400 hover:text-gray-700" />
        </div>
      </div>
    </div>
  );
}
