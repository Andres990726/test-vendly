import { api } from '../services/endpoints'
import { keys } from '../utils/storage'
import useSWR from 'swr'

export const useMovies = () => {
  const { data, error, isLoading } = useSWR(keys.movies, api.getMovies)

  return {
    movies: data,
    error,
    isLoading,
  }
}