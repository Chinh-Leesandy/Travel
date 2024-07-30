import axios from 'axios';
import { setAccessToken } from '../../features/api/token-api-slice';
import { AppDispatch } from '../../app/store/store';
const clientID = import.meta.env.VITE_CLIENTID
const clientSecret = import.meta.env.VITE_CLIENTSECRET
export const axiosInstanceToken = axios.create({
  baseURL: 'https://test.api.amadeus.com/v1/security/oauth2/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const params = new URLSearchParams({
  grant_type: 'client_credentials',
  client_id: clientID,
  client_secret: clientSecret
})
export async function initAccessToken(dispatch: AppDispatch) {
  try {
    const response = await axiosInstanceToken.post('', params);
    dispatch(setAccessToken(response.data.access_token));
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error)
    throw error
  }
}
