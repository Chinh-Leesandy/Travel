import { axiosInstance } from "../../libs/services/initAPI";
import { SearchHotel } from "../../types/hotel/SearchHotel";
import { getCityIATA } from "../city/getCityIATA";

export const ApiSearchHotel = {
  getSearchHotel: async (params: SearchHotel) => {
    try {
      const { city, radius, radiusUnit, amenities = [] } = params;
      const cityCode = await getCityIATA(city);
      const url = 'v1/reference-data/locations/hotels/by-city';
      const queryParams = new URLSearchParams();
      queryParams.append('cityCode', cityCode);
      queryParams.append('radius', radius.toString());
      queryParams.append('radiusUnit', radiusUnit);
      if (amenities.length > 0) {
        queryParams.append('amenities', amenities.join(','));
      }
      const res = await axiosInstance.get(`${url}?${queryParams.toString()}`);
      return res.data.data
    } catch (error) {
      console.error('Error fetching search hotel:', error);
      throw error;
    }
  }
}