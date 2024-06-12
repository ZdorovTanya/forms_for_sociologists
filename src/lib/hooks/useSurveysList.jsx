import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { deserialize } from 'deserialize-json-api'
import { API_HOST_URL } from '../constants'

export const useSurveysList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['surveyList'],
    queryFn: () => axios.get(API_HOST_URL + '/surveys').then((res) => deserialize(res.data).data),
  })

  return { isPending, error, data }
}
 