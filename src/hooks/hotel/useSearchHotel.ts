import { useQuery } from "@tanstack/react-query";
import { SearchHotel } from "../../types/hotel/SearchHotel";
import { ApiSearchHotel } from "../../features/hotel/ApiSearchHotel";

const useSearchHotel = (params: SearchHotel) => {
  return useQuery({
    queryKey: ['SearchHotel', params],
    queryFn: () => ApiSearchHotel.getSearchHotel(params),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: Infinity,
  })
}
export default useSearchHotel;