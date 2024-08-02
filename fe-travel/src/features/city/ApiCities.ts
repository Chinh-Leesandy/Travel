import { axiosInstance } from '../../libs/services/initApiLocal'

export const ApiCities = {
  getAllCities: async () => {
    try {
      const res = await axiosInstance.get(`cities`)
      return res.data
    } catch (error) {
      console.error('get all cities by local fails', error)
      throw error
    }
  },
  getCitiesById: async (id: string) => {
    try {
      const res = await axiosInstance.get(`cities/${id}`)
      return res.data
    } catch (error) {
      console.error('get city by id local fails', error)
      throw error
    }
  }
}