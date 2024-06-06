import React from "react";
import styles from "./DropDownGroup.module.scss";
import { useState } from "react";

function DropDownGroup({ selected, setSelected, id, fullSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Администратор", "Участник", "Читатель"];

  const createOption = (allRoles, userId, newRole) => {
    const newh = Object.assign({}, allRoles);
    newh[userId] = newRole;
    return newh;
  };

  return (
    <div className={styles.dropdown}>
      <div
        key={id}
        className={styles.dropdown_btn}
        onClick={(e) => {
          e.preventDefault();
          setIsActive(!isActive);
        }}
        // onClick={choiceRole}
      > 
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                e.preventDefault();
                setSelected(createOption(fullSelected, id, option));
                setIsActive(false);
              }}
              className={styles.dropdown_item}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownGroup;
