import { api } from '../services/endpoints'
import useSWR from 'swr'

export const useMovie = (id: number) => {
    const url = 'https://api.themoviedb.org/3/movie/' + id
  const { data, error, isLoading } = useSWR(url, api.getMovie)

  return {
    movie: data,
    error,
    isLoading,
  }
}