import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSurveyStore } from "./useSurveyStore";
import Button from "../Account/Button";
import Uploader from "../Account/component/Uploader";
// import Calendar1 from "./Calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

export const InitForm = () => {
  const surveyName = useSurveyStore((state) => state.surveyName);
  const changeSurveyName = useSurveyStore((state) => state.changeSurveyName);

  const surveyDescription = useSurveyStore((state) => state.surveyDescription);
  const changeSurveyDescription = useSurveyStore(
    (state) => state.changeSurveyDescription
  );

  const surveyTimePassing = useSurveyStore((state) => state.surveyTimePassing);
  const changeSurveyTimePassing = useSurveyStore(
    (state) => state.changeSurveyTimePassing
  );

  const surveyAge = useSurveyStore((state) => state.surveyAge);
  const changeSurveyAge = useSurveyStore(
    (state) => state.changeSurveyAge
  );

  const surveyTime = useSurveyStore((state) => state.surveyTime);
  const changeSurveyTime = useSurveyStore((state) => state.changeSurveyTime);

  const surveyCountAnswersLabel = useSurveyStore(
    (state) => state.surveyCountAnswersLabel
  );
  const changeSurveyCountAnswersLabel = useSurveyStore(
    (state) => state.changeSurveyCountAnswersLabel
  );

  const surveyDeadline = useSurveyStore((state) => state.surveyDeadline);
  const changeSurveyDeadline = useSurveyStore(
    (state) => state.changeSurveyDeadline
  );

  const surveyMinTime = useSurveyStore((state) => state.surveyMinTime);
  const changeSurveyMinTime = useSurveyStore(
    (state) => state.changeSurveyMinTime
  );

  const surveyAttemptCount = useSurveyStore(
    (state) => state.surveyAttemptCount
  );
  const changeSurveyAttemptCount = useSurveyStore(
    (state) => state.changeSurveyAttemptCount
  );

  const surveyAnonymous = useSurveyStore((state) => state.surveyAnonymous);
  const changeSurveyAnonymous = useSurveyStore(
    (state) => state.changeSurveyAnonymous
  );

  const surveyCountAnswers = useSurveyStore(
    (state) => state.surveyCountAnswers
  );
  const changeSurveyCountAnswers = useSurveyStore(
    (state) => state.changeSurveyCountAnswers
  );

  const surveySendAnswers = useSurveyStore((state) => state.surveySendAnswers);
  const changeSurveySendAnswers = useSurveyStore(
    (state) => state.changeSurveySendAnswers
  );

  const navigate = useNavigate();

  const changeSurveyDeadlineForm = (e) => {
    changeSurveyDeadline(e.target.value);
  };
  const changeSurveyMinTimeForm = (e) => {
    changeSurveyMinTime(e.target.value);
  };
  const changeSurveyAttemptCountForm = (e) => {
    changeSurveyAttemptCount(e.target.value);
  };
  const changeSurveyAnonymousForm = (e) => {
    changeSurveyAnonymous(e.target.value);
  };
  const changeSurveyCountAnswersForm = (e) => {
    changeSurveyCountAnswers(e.target.value);
  };
  const changeSurveySendAnswersForm = (e) => {
    changeSurveySendAnswers(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/surveys/content/1");
      }}
    >
      <div className="flex">
        <div className="py-4 w-auto">
          <h3 className="py-2 text-xl">Обложка опроса</h3>
          <p className="py-2 text-gray-400">
            Выберете изображение для обложки опроса
          </p>
          <div className="w-72">
            <Uploader />
          </div>
        </div>

        <div className="pl-10 flex flex-col w-1/3">
          <div className="py-4">
            <h3 className="py-2 text-xl">Название</h3>
            <p className="py-2 text-gray-400">Укажите название нового опроса</p>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                class="p-2 w-full focus-visible:outline-none"
                type="text"
                placeholder="Название"
                onChange={(e) => changeSurveyName(e.target.value)}
                value={surveyName}
              />
            </div>
          </div>

          <div className="py-4">
            <h3 className="py-2 text-xl">Описание опроса</h3>
            <p className="py-2 text-gray-400">Укажите описание нового опроса</p>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                class="p-2 w-full focus-visible:outline-none"
                type="text"
                placeholder="Описание"
                onChange={(e) => changeSurveyDescription(e.target.value)}
                value={surveyDescription}
              />
            </div>
          </div>
        </div>

        <div className="pl-10 flex flex-col w-1/3">
          <div className="py-4">
            <h3 className="py-2 text-xl">Время</h3>
            <p className="py-2 text-gray-400">
              Укажите время прохождения опроса
            </p>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                class="p-2 w-full focus-visible:outline-none"
                type="text"
                placeholder="Приблизительное время прохождения опроса"
                onChange={(e) => changeSurveyTimePassing(e.target.value)}
                value={surveyTimePassing}
              />
            </div>
          </div>
          <div className="py-4">
            <h3 className="py-2 text-xl">Возраст</h3>
            <p className="py-2 text-gray-400">
              Укажите возрастное ограничение опроса
            </p>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                class="p-2 w-full focus-visible:outline-none"
                type="number"
                placeholder="Минимальный возраст для прохождения опроса"
                onChange={(e) => changeSurveyAge(e.target.value)}
                value={surveyAge}
              />
            </div>
          </div>
        </div>

    
      </div>

      <h3 className="py-2 my-5 text-xl">Настройки опроса</h3>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {" "}
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">Срок активности</h3>
          <p className="py-2 text-gray-400">
            По окончании срока форма будет закрыта, но результаты будут доступны
            всегда
            <br />
            Срок можно будет изменить в настройках в любое время
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveyDeadlineForm}
                className="cursor-pointer"
                checked={surveyDeadline === "unlimited"}
                type="radio"
                id="unlimitedExistence"
                name="surveyDeadline"
                value="unlimited"
              />
              <label for="unlimitedExistence" className="pl-2">
                Не ограничен
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyDeadlineForm}
                className="cursor-pointer"
                checked={surveyDeadline === "1Minutes"}
                type="radio"
                id="weak"
                name="surveyDeadline"
                value="1Minutes"
              />
              <label for="weak" className="pl-2">
                Неделя
              </label>
            </div>
            <div className="pl-4 flex">
              <input
                onChange={changeSurveyDeadlineForm}
                className="cursor-pointer"
                checked={surveyDeadline === "30Seconds"}
                type="radio"
                id="month"
                name="surveyDeadline"
                value="30Seconds"
              />
              <label for="month" className="pl-2 flex items-center">
                {/* Укажите дату */}
                {/* {surveyDeadline == '30Seconds' ? <Calendar1/> : false} */}
                {/* <Calendar1/> */}

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-24"
                />
                <FaRegCalendarAlt />
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">Минимальное время прохождения опроса</h3>
          <p className="py-2 text-gray-400">
            Указав минимальное время прохождения опроса, результаты, которые
            были получены за меньшее время, не будут учитываться в статистике. В
            выгрузке ответов они отобразятся, но будут помечены как
            недействительные.
            <br />
            Минимальное время прохождения изменить будет нельзя
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveyMinTimeForm}
                className="cursor-pointer"
                checked={surveyMinTime === "unlimited"}
                type="radio"
                id="unlimitedTime"
                name="surveyMinTime"
                value="unlimited"
              />
              <label for="unlimitedTime" className="pl-2">
                Не ограничен
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyMinTimeForm}
                className="cursor-pointer"
                checked={surveyMinTime === "7Minutes"}
                type="radio"
                id="minutes"
                name="surveyMinTime"
                value="7Minutes"
              />
              <label for="minutes" className="pl-2">
                7 минут
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyMinTimeForm}
                className="cursor-pointer"
                checked={surveyMinTime === "10Day"}
                type="radio"
                id="time"
                name="surveyMinTime"
                value="10Day"
              />
              <label for="time" className="pl-2">
                <input
                  class="focus-visible:outline-none"
                  type="text"
                  placeholder="Укажите время в минутах"
                  onChange={(e) => changeSurveyTime(e.target.value)}
                  value={surveyTime}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">Повторное прохождение опроса</h3>
          <p className="py-2 text-gray-400">
            Сколько раз может пройти опрос один пользователь.
            <br />
            Вы сможете изменить этот параметр при необходимости
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveyAttemptCountForm}
                className="cursor-pointer"
                checked={surveyAttemptCount === "unlimited"}
                type="radio"
                id="unlimited"
                name="surveyAttemptCount"
                value="unlimited"
              />
              <label for="unlimited" className="pl-2">
                Не ограниченое количество прохождений
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyAttemptCountForm}
                className="cursor-pointer"
                checked={surveyAttemptCount === "one"}
                type="radio"
                id="one"
                name="surveyAttemptCount"
                value="one"
              />
              <label for="one" className="pl-2">
                Единоразовое прохождение
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">Анонимность опроса</h3>
          <p className="py-2 text-gray-400">
            В анонимных опросах имя пользователя остается неизвестным.
            <br />
            Вы не сможете изменить этот параметр в дальнейшем
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveyAnonymousForm}
                className="cursor-pointer"
                checked={surveyAnonymous === "anonymous"}
                type="radio"
                id="close"
                name="surveyAnonymous"
                value="anonymous"
              />
              <label for="close" className="pl-2">
                Анонимный опрос
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyAnonymousForm}
                className="cursor-pointer"
                checked={surveyAnonymous === "open"}
                type="radio"
                id="open"
                name="surveyAnonymous"
                value="open"
              />
              <label for="open" className="pl-2">
                Открытый опрос
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">
            Закрытие опроса по достижению указанного количества ответов
          </h3>
          <p className="py-2 text-gray-400">
            Указав необходимое количество ответов, опрос станет недоступным,
            когда будет собрано заданное количество голосов
            <br />
            Вы сможете изменить этот параметр при необходимости
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveyCountAnswersForm}
                className="cursor-pointer"
                checked={surveyCountAnswers === "nocount"}
                type="radio"
                id="infinity"
                name="surveyCountAnswers"
                value="nocount"
              />
              <label for="infinity" className="pl-2">
                Бесконечное число ответов
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveyCountAnswersForm}
                className="cursor-pointer"
                checked={surveyCountAnswers === "count"}
                type="radio"
                id="limb"
                name="surveyCountAnswers"
                value="count"
              />
              <label for="limb" className="pl-2">
                <input
                  class="focus-visible:outline-none"
                  type="text"
                  placeholder="Укажите количество ответов"
                  onChange={(e) =>
                    changeSurveyCountAnswersLabel(e.target.value)
                  }
                  value={surveyCountAnswersLabel}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="py-4 p-5 border-solid border-2 border-slate-300 rounded-md">
          <h3 className="py-2 text-xl">
            Отправлять респондентам электронное письмо с их ответами
          </h3>
          <p className="py-2 text-gray-400">
            Пользователям на почту придет письмо с их ответами
            <br />
            Вы сможете изменить этот параметр при необходимости
          </p>
          <div className="flex py-2">
            <div>
              <input
                onChange={changeSurveySendAnswersForm}
                className="cursor-pointer"
                checked={surveySendAnswers === "sendletter"}
                type="radio"
                id="sendletter"
                name="surveySendAnswers"
                value="sendletter"
              />
              <label for="sendletter" className="pl-2">
                Отправлять письмо
              </label>
            </div>
            <div className="pl-4">
              <input
                onChange={changeSurveySendAnswersForm}
                className="cursor-pointer"
                checked={surveySendAnswers === "nosendletter"}
                type="radio"
                id="nosendletter"
                name="surveySendAnswers"
                value="nosendletter"
              />
              <label for="nosendletter" className="pl-2">
                Не отправлять письмо
              </label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="py-4">
        <Button text={"Продолжить"} />
      </button>
    </form>
  );
};
