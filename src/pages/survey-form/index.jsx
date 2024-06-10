import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ArrowBack } from '@mui/icons-material'
import { useSurveyForm } from '../../lib/hooks/useSurveyForm'
import SurveyField from './components/SurveyField'
import { API_HOST_URL } from '../../lib/constants'

const SurveyForm = () => {
  const { id: surveyId } = useParams()
  const { isPending, error, data } = useSurveyForm(surveyId)
  const { register, handleSubmit, reset } = useForm()
  const mutation = useMutation({
    mutationFn: (surveyAnswerd) => {
      return axios.post(API_HOST_URL + '/surveys/' + surveyId + '/answers', surveyAnswerd)
    },
  })

  if (isPending) return <div>load</div>

  if (!data || error) return <div>Неверная ссылка для прохождения опроса</div>

  const onSubmit = (answers) => {
    const serialisedAnswers = {
      user_id: 'no-user-id-in-system',
      answer: {
        answers_count: Object.keys(answers).length,
        answer_data: Object.entries(answers).map(([key, answer]) => ({ number: key.split('-')[1], result: answer })),
      },
    }

    mutation.mutate(serialisedAnswers)
  }

  return (
    <div className="bg-emerald-50 min-h-screen">
      <header className="sticky w-full h-12 bg-white top-0 inset-x-0 shadow px-12">
        <Link to="/surveys" className="flex gap-x-3 text-gray-700 hover:text-emerald-800 font-medium">
          <ArrowBack className=" size-5" />
          <span>Назад к списку опросов</span>
        </Link>
      </header>
      <section className="px-12 pb-8">
        <div className="flex flex-col gap-y-3 px-12 py-6 bg-white rounded-b-lg shadow-lg mb-8">
          <h1 className="text-2xl font-bold text-gray-700">{data.name}</h1>
          <div className="bg-gray-200 h-px" />
          <p className="text-lg font-medium">{data.description}</p>
        </div>

        <form className="flex flex-col gap-y-6 " onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  )
}

export default SurveyForm
