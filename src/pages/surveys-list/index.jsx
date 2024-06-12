import React from "react";
import { useSurveysList } from "../../lib/hooks/useSurveysList";
import { SurveyCard } from "./components/SurveyCard";

const SurveysList = () => {
  const { isPending, error, data } = useSurveysList();

  if (isPending) return <div>load</div>;

  if (!data || error) return <div>Нет доступа к этой странице</div>;

  //console.log(data)

  return (
    <>
      <div className="flex flex-wrap gap-12 min-h-screen bg-emerald-50 rounded-xl p-12 mb-10">
        {data.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </div>
    </>
  );
};

export default SurveysList;
