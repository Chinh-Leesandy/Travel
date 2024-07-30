import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default function initApiLocal() {
  axiosInstance.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  }),
    axiosInstance.interceptors.response.use((response: AxiosResponse) => { return response }, (error) => {
      switch (error.response?.status) {
        case 401: {
          break;
        }
        case 403: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error.response?.data);
    })
}