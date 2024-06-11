import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { deserialize } from 'deserialize-json-api'
import { API_HOST_URL } from '../constants'

export const useSurveyForm = (surveyId) => {
  const { isPending, error, data } = useQuery({
    queryKey: [surveyId],
    queryFn: () => axios.get(API_HOST_URL + '/surveys/' + surveyId).then((res) => deserialize(res.data).data),
  })

  return { isPending, error, data }
}
