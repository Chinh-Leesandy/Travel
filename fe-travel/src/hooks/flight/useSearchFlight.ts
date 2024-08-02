import { useQuery } from "@tanstack/react-query";
import { SearchFlight } from "../../types/flight/SearchFlight";
import { ApiSearchFlight } from "../../features/flight/ApiSearchFlight";

const useSearchFlight = (params: SearchFlight) => {
  return useQuery({
    queryKey: ['SearchFlight', params],
    queryFn: () => ApiSearchFlight.getSearchFlight(params),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: Infinity
  })
}

export default useSearchFlight;