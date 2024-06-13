import React, { useState } from "react";
import styles from "./UserInfo.module.scss";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { EditUserImage } from "./edit/EditUserImage";
import { ImExit } from "react-icons/im";

const info = [
  {
    id: "0",
    name: "Ксения Борисовна Соколова",
    img: "./../../../..//images/kurator2.jpg",
    email: `Sokolova.ksenia@mail.ru`,
    birth: `10.03.1983`,
    data: `15.02.2024`,
    gender: "male",
  },
];

export default function UserInfo() {
  const [showImg, showEditImg] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleEditImgShow = () => {
    showEditImg(true);
  };
  const handleEditImgHide = () => {
    showEditImg(false);
  };
  return (
    <div className={styles.wrapper}>
      {showImg && <EditUserImage handleEditImgHide={handleEditImgHide} />}
      <div className={styles.team_item}>
        <div href="" className={styles.team_image}>
          {imageLoaded ? (
            <img src={info[0]["img"]} alt="Profile" />
          ) : (
            <img
              src={
                info[0]["gender"] == "male"
                  ? "./../../../..//images/man_picture.jpg"
                  : "./../../../..//images/women_picture.jpg"
              }
              alt="Default Profile"
              onLoad={handleImageLoad}
            />
          )}

          <CiEdit className={styles.edit_foto} onClick={handleEditImgShow} />
          {/* <FaTrash className={styles.delete_foto} /> */}
        </div>
        <div className={styles.team_text}>
          <div className={styles.info}>
            {info.map((p) => (
              <>
                <h3>{p.name}</h3>
                <div className={styles.info_email}>{p.email}</div>
                <div className={styles.data_info}>
                  <h4>Дата рождения</h4>
                  <div className={styles.info_email}>{p.birth}</div>
                </div>
                <div className={styles.data_info}>
                  <h4>Дата регистрации</h4>
                  <div className={styles.info_email}>{p.data}</div>
                </div>
                <div>
                  <ImExit className={styles.exit} />
                </div>
              </>
            ))}
          </div>
          <NavLink to="/userSettings">
            <IoSettingsSharp className={styles.edit_info} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
