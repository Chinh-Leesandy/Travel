import { useQuery } from "@tanstack/react-query";
import ApiSearchTour from "../../features/tour/ApiSearchTour";

const useTourAndActive = (city: string) => {
  return useQuery({
    queryKey: ['TourAndActive', city],
    queryFn: () => ApiSearchTour.getTourAndActive(city),
    enabled: !!city,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  })
};
export default useTourAndActive;