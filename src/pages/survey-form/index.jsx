import { useParams } from 'react-router-dom'
import { useSurveyForm } from '../../lib/hooks/useSurveyForm'
import SurveyField from './components/SurveyField'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_HOST_URL } from '../../lib/constants'

const SurveyForm = () => {
  const { id: surveyId } = useParams()
  const { isPending, error, data } = useSurveyForm(surveyId)
  const { register, handleSubmit, reset } = useForm()
  const mutation = useMutation({
    mutationFn: (surveyAnswerd) => {
      return axios.post(API_HOST_URL + '/surveys/' + surveyId, surveyAnswerd)
    },
  })

  if (isPending) return <div>load</div>

  if (!data || error) return <div>Неверная ссылка для прохождения опроса</div>

  console.log(data)

  const onSubmit = (answers) => {
    mutation.mutate({ data: { answers } })
  }

  return (
    <section className="bg-emerald-50 min-h-screen">
      <div className="flex flex-col gap-y-3 px-12 pt-6 pb-3 bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700">{data.name}</h1>
        <div className="bg-gray-200 h-px" />
        <p className="text-lg font-medium">{data.description}</p>
      </div>

      <form className="flex flex-col gap-y-6 px-12 py-8" onSubmit={handleSubmit(onSubmit)}>
        {data.questions.questions.map((question) => (
          <SurveyField key={question.id} question={question} {...register(`${question.type}-${question.id}`)} />
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-white border-2 border-solid border-gray-600 rounded-lg px-5 py-2.5 font-medium text-gray-700 hover:bg-emerald-50 duration-300"
          >
            Сбросить
          </button>
          <button
            type="submit"
            className="bg-emerald-400 rounded-lg px-5 py-2.5 font-medium text-white hover:bg-emerald-500 duration-300"
          >
            Отправить
          </button>
        </div>
      </form>
    </section>
  )
}

export default SurveyForm
