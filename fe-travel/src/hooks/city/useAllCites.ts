import { useQuery } from '@tanstack/react-query'
import { ApiCities } from '../../features/city/ApiCities'

export const useAllCities = () => {
  return useQuery({
    queryKey: ['allCities'],
    queryFn: () => ApiCities.getAllCities(),
    staleTime: Infinity
  })
}

