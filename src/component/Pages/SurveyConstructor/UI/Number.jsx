import { useEffect, useId } from "react";
import { useSurveyConstructorStore } from "../useSurveyConstructorStore";

export const Number = ({ parentId, form, index, isOneSubForm }) => {
  const initialId = useId();
  const addSubFormId = useSurveyConstructorStore((state) => state.addSubFormId);
  const changeSubFormName = useSurveyConstructorStore(
    (state) => state.changeSubFormName
  );

  //   const surveyName = useSurveyStore((state) => state.surveyName);
  //   const changeSurveyName = useSurveyStore((state) => state.changeSurveyName);

  useEffect(() => {
    addSubFormId(initialId, parentId, form);
  }, [parentId]);

  const handleChangeForm = (e) => {
    const value = e.target.value;
    if (value > 10) changeSubFormName(10, form.id, parentId);
    else if (value < 1) changeSubFormName(1, form.id, parentId);
    else changeSubFormName(value, form.id, parentId);
  };

  return (
    <div className="w-full p-2 flex justify-between items-center">
      <input
        className="w-10"
        min="0"
        max="10"
        type="number"
        placeholder={`${!isOneSubForm ? index + 1 : ""}`}
        value={form.variants}
        onChange={handleChangeForm}
      />
      <input
        class="p-2 w-full focus:border-solid border-0 border-b-2 border-green-500 duration-100 ease-in-out"
        type="text"
        placeholder="Подпись (необязательно)"
        // onChange={(e) => changeSurveyName(e.target.value)}
        // value={surveyName}
      />
    </div>
  );
};
