import { api } from '../services/endpoints'
import { keys } from '../utils/storage'
import useSWR from 'swr'

export const useCategories = () => {
  const { data, error, isLoading } = useSWR(keys.categories, api.getCategories)

  return {
    categories: data,
    error,
    isLoading,
  }
}