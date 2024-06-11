import { FaTrash } from "react-icons/fa";
import { useSurveyConstructorStore } from "../useSurveyConstructorStore";

export const Container = ({
  children,
  id,
  name,
  required,
  question,
  requiredIsNotNeed,
}) => {
  const changeFormName = useSurveyConstructorStore(
    (state) => state.changeFormName
  );
  const removeForm = useSurveyConstructorStore((state) => state.removeForm);
  const changeFormRequired = useSurveyConstructorStore(
    (state) => state.changeFormRequired
  );

  const handleChangeFormName = (e) => {
    const value = e.target.value;
    changeFormName(value, id);
  };

  const handleChangeFormRequired = () => {
    changeFormRequired(id);
  };

  const handleRemoveForm = () => {
    removeForm(id);
  };

  return (
    <div className="w-1/2 mx-auto my-4 flex flex-col justify-start gap-2 p-3 border-2 border-green-500 rounded-lg ">
      <div className="px-2 flex justify-between items-center">
        <div>{name}</div>
        {!requiredIsNotNeed && (
          <div className="flex items-center gap-1.5">
            <input
              type="checkbox"
              onChange={handleChangeFormRequired}
              checked={required}
              class=" relative h-5 w-5 cursor-pointer accent-green-600 rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
            ></input>
            <p className="pr-1 ">Обязателен</p>

            <FaTrash className='hover:text-red-800' onClick={handleRemoveForm} />
          </div>
        )}
      </div>
      <div className="p-2 border-b-2 border-green-500">
        <input
          onChange={handleChangeFormName}
          type="text"
          placeholder="Текст вопроса"
          value={question}
        />
      </div>
      {children}
    </div>
  );
};
