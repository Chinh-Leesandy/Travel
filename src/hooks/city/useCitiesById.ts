import { useQuery } from '@tanstack/react-query'
import { ApiCities } from '../../features/city/ApiCities'

export const useCitiesById = (id: string) => {
  return useQuery({
    queryKey: ['cities', id],
    queryFn: () => ApiCities.getCitiesById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false
  })
}
