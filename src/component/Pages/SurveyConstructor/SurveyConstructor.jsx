import { useState } from "react";
import { NewForm } from "./NewForm";
import { FormCreator } from "./Forms/FormCreator";
import UserHeader from "../Account/UserHeader";
import Button from "../Account/Button";
import { NavLink } from "react-router-dom";
import { API_HOST_URL } from "../../../lib/constants";

import { useSurveyConstructorStore } from "./useSurveyConstructorStore";
import { useSurveyStore } from "./../CreateSurvey/useSurveyStore";

export const SurveyConstructor = () => {
  const [open, setOpen] = useState(false);

  const forms = useSurveyConstructorStore((state) => state.forms);
  const surveyData = useSurveyStore((get) => get);

  const saveSurvey = async () => {
    const new_survey = {
      survey: {
        name: surveyData.surveyName,
        // wallpaper: {file png/jpeg},
        description: surveyData.surveyDescription,
        actived: true,
        private: false,
        anonymous: surveyData.surveyAnonymous,
        completion_time: null,
        completion_by_person: null,
        needed_votes: null,
        start_date: new Date().toISOString(),
        end_date: null,
        questions_count: Object.keys(forms).length,
        questions: Object.entries(forms).map(([key, value]) => ({
          id: (Number(key)+1).toString(),
          number: Number(key)+1,
          type: value.type,
          text: value.question,
          hint: "hinthint"
        })),
      },
    };

    await fetch(API_HOST_URL + "/surveys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new_survey),
    });
  };

  return (
    <>
      <UserHeader />
      <div className="container mx-auto px-20">
        <div className="flex justify-between w-full border-b-2 border-gray-400 ">
          <NavLink to="/survey">
            <h2 className="text-gray-400">Настройки опроса</h2>
          </NavLink>
          <NavLink to="/surveys/content/1">
            <h2>Конструктор опроса</h2>
          </NavLink>
          <NavLink to="/surveys/result">
            <h2 className="text-gray-400">Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2 className="text-gray-400">Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>
      <div className="container mx-auto text-center px-20">
        <FormCreator />
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-1/2 text-4xl my-6 py-1 hover:text-white hover:bg-green-400 rounded-xl transition-all"
        >
          +
        </button>

        <Button text={"Сохранить"} onClick={saveSurvey} />

        <NewForm open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
