import { axiosInstance } from "../../libs/services/initAPI";
import { SearchFlight } from "../../types/flight/SearchFlight";
import { getCityIATA } from "../city/getCityIATA";

export const ApiSearchFlight = {
  getSearchFlight: async (params: SearchFlight) => {
    try {
      const { originCity, destinationCity, departureDate, returnDate, adults = 1, children = 0, travelClass, includedAirlineCodes = [] } = params
      const originLocationCode = await getCityIATA(originCity)
      const destinationLocationCode = await getCityIATA(destinationCity)
      const url = 'v2/shopping/flight-offers'
      const queryParams = new URLSearchParams()
      queryParams.append('originLocationCode', originLocationCode)
      queryParams.append('destinationLocationCode', destinationLocationCode)
      queryParams.append('departureDate', departureDate)
      if (returnDate) {
        queryParams.append('returnDate', returnDate)
      }
      queryParams.append('adults', adults.toString())
      if (children > 0) {
        queryParams.append('children', children.toString())
      }
      queryParams.append('travelClass', travelClass)
      if (includedAirlineCodes.length > 0) {
        queryParams.append('includedAirlineCodes', includedAirlineCodes.join(','))
      }
      const res = await axiosInstance.get(`${url}?${queryParams.toString()}`)
      return res.data.data
    }
    catch (error) {
      console.error('Error fetching search flight:', error)
      throw error
    }
  }
}