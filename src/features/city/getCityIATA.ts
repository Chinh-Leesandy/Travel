import { axiosInstance } from "../../libs/services/initAPI";

export const getCityIATA = async (city: string) => {
  try {
    const res = await axiosInstance.get(`v1/reference-data/locations/cities?keyword=${city}&max=1`);
    if (res.data.data && res.data.data.length > 0) {
      return res.data.data[0].iataCode;
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    console.error('Error fetching city IATA code:', error)
    throw error
  }
}