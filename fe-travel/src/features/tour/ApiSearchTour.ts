import { axiosInstance } from "../../libs/services/initAPI";
import { getCityCoordinates } from "../city/getCityCoordinates";

const ApiSearchTour = {
  getTourAndActive: async (city: string) => {
    try {
      const { latitude, longitude } = await getCityCoordinates(city);
      const res = await axiosInstance.get(`v1/shopping/activities`, {
        params: {
          latitude,
          longitude,
          radius: 5
        }
      });
      return res.data.data;
    } catch (error) {
      console.error('Error fetching tour and active by city:', error)
      throw error
    }
  }
}

export default ApiSearchTour;