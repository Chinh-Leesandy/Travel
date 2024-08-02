import { axiosInstance } from "../../libs/services/initAPI"

export const getCityCoordinates = async (city: string) => {
  try {
    const res = await axiosInstance.get(`v1/reference-data/locations/cities?keyword=${city}&max=1`);
    if (res.data.data && res.data.data.length > 0) {
      const { geoCode } = res.data.data[0];
      return { latitude: geoCode.latitude, longitude: geoCode.longitude };
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    console.error('Error fetching city coordinates:', error)
    throw error
  }
}