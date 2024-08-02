import axios, { AxiosResponse } from 'axios'
import { store, RootState } from '../../app/store/store'

export const axiosInstance = axios.create({
  baseURL: 'https://test.api.amadeus.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default function initAPI() {
  axiosInstance.interceptors.request.use((config) => {
    const state: RootState = store.getState();
    const token = state.token.accessToken;
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
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
};