import React from "react";
import styles from "..//Account/User.module.scss";
import UserHeader from "../Account/UserHeader";
import UserSurvey from "../Account/UserSurvey";
import SurveyHomeCard from "./SurveyHomeCard.jsx";
import SurveysList from "../../../pages/surveys-list/index.jsx";

export default function SurveyHome() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />
      <div className={styles.survey}>
        <SurveyHomeCard />
      </div>
      <div className={styles.survey}>
        {/* <h2 className={styles.survey_header}>Все опросы</h2> */}
        <UserSurvey />
        {/* <SurveysList /> */}
      </div>
    </div>
  );
}
