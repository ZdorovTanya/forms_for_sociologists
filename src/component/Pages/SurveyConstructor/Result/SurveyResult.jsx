import React from "react";
import UserHeader from "../../Account/UserHeader";
import { NavLink } from "react-router-dom";
import styles from "./SurveyResult.module.scss";
import "./styles.scss";

import { useSurveyConstructorStore } from "../useSurveyConstructorStore";
import { useSurveyStore } from "../../CreateSurvey/useSurveyStore";

import {
  XAxis,
  YAxis,
  XYPlot,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

export default function SurveyResult() {
  const forms = useSurveyConstructorStore((state) => state.forms);
  const surveyData = useSurveyStore((get) => get);

  const SURVEY = {
    survey: {
      name: "Опрос 1",
      questions_count: 2,
      actived: true,
      private: "public",
      start_date: "25.05.2024",
      end_date: "28.05.2024",
      surveyMinTime: "7minutes",
      surveyAttemptCount: "123",
      surveyCountAnswers: "nolimit",
      questions: [
        {
          id: ":r0:",
          name: "Выбор одного варианта",
          question: "Выберите фрукт",
          required: "false",
          subForms: [
            {
              name: "Вариант",
              variants: "Авокадо",
              id: ":r1",
              countAnswer: 10,
            },
            { name: "Вариант", variants: "Ананас", id: ":r2", countAnswer: 20 },
            { name: "Вариант", variants: "Банан", id: ":r3", countAnswer: 30 },
            { name: "Вариант", variants: "Яблоко", id: ":r4", countAnswer: 10 },
          ],
          type: "radio",
        },
        {
          id: ":r4:",
          name: "Выбор нескольких",
          question: "Как вы предпочитаете отдыхать?",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Спать", id: ":r1", countAnswer: 40 },
            { name: "Вариант", variants: "Есть", id: ":r2", countAnswer: 20 },
            { name: "Вариант", variants: "Хобби", id: ":r3", countAnswer: 30 },
          ],
          type: "chekbox",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "text",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "textfield",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 2 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 3 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 4 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "select",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            {
              name: "Вариант",
              variants: "Оценка 1",
              id: ":r1",
              countAnswer: 1,
            },
            {
              name: "Вариант",
              variants: "Оценка 2",
              id: ":r2",
              countAnswer: 3,
            },
            {
              name: "Вариант",
              variants: "Оценка 3",
              id: ":r3",
              countAnswer: 1,
            },
            {
              name: "Вариант",
              variants: "Оценка 4",
              id: ":r4",
              countAnswer: 7,
            },
            {
              name: "Вариант",
              variants: "Оценка 5",
              id: ":r5",
              countAnswer: 20,
            },
          ],
          type: "rating",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "email",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "date",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "information",
        },
        {
          id: ":r8:",
          name: "Строковое поле",
          question: "str",
          required: "false",
          subForms: [
            { name: "Вариант", variants: "Ответ 1", id: ":r1", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 2", id: ":r2", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 3", id: ":r3", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 4", id: ":r4", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 5", id: ":r5", countAnswer: 1 },
            { name: "Вариант", variants: "Ответ 6", id: ":r6", countAnswer: 1 },
          ],
          type: "matrix",
        },
      ],
    },
  };

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
            <h2>Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2 className="text-gray-400">Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>

      <div className={styles.wrap}>
        <h2>Анализ результатов</h2>
        <div className={styles.count}>
          <h3>Число ответов:</h3>
          <h3>Число уникальных пользователей:</h3>
        </div>
        <div className={styles.download}>
          <div className={styles.one}>
            <h3 className={styles.icon_title}>Отдельные ответы</h3>
            <div className={styles.icon}>
              <img src="/images/icons8-csv.png" alt="" />
              <img src="/images/icons8-excel.png" alt="" />
            </div>
          </div>
          <div className={styles.svod}>
            <h3 className={styles.icon_title}>Сводные результаты</h3>
            <div className={styles.icon}>
              <img src="/images/icons8-pdf.png" alt="" />
            </div>
          </div>
        </div>

        {SURVEY.survey.questions.map((question, id) => {
          if (
            question.type !== "matrix" &&
            question.type !== "date" &&
            question.type !== "text" &&
            question.type !== "textfield" &&
            question.type !== "email" &&
            question.type !== "information"
          ) {
            let subFormsDate = [];
            let radialFormsDate = [];
            question.subForms.map((subForms) => {
              subFormsDate.push({
                x: subForms.variants,
                y: subForms.countAnswer,
              });
            });

            if (question.type != "radio")
              return (
                <div className={styles.answer__container}>
                  <p>
                    Вопрос №{id + 1}: {question.question}
                  </p>
                  <p>Ответы: </p>
                  <XYPlot height={400} width={400} xType="ordinal">
                    <HorizontalGridLines />
                    <YAxis title="Количество ответов" />
                    <XAxis />
                    <VerticalBarSeries data={subFormsDate} />
                  </XYPlot>
                </div>
              );
            if (question.type == "radio")
              question.subForms.map((subForms) => {
                radialFormsDate.push({
                  radius: 1,
                  title: `${subForms.variants} (${subForms.countAnswer})`,
                  angle: subForms.countAnswer,
                  label: `${subForms.variants} (${subForms.countAnswer})`,
                });
              });
            return (
              <div className={styles.answer__container}>
                <p>
                  Вопрос №{id + 1}: {question.question}
                </p>
                <p>Ответы: </p>
                <RadialChart
                  data={radialFormsDate}
                  width={400}
                  height={400}
                  showLabels
                  innerRadius={100}
                  radius={140}
                  padAngle={0.04}
                />
              </div>
            );
          } else {
            return (
              <div className={styles.answer__container}>
                <p>
                  Вопрос №{id + 1}: {question.question}
                </p>
                <p>Ответы: </p>
                <div className={styles.answer__text}>
                  <ul>
                    {question.subForms.map((answer) => {
                      return <li>{answer.variants}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
