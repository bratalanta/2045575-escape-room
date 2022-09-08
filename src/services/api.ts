import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const {response} = error;
      if (response) {
        console.log(error.response?.data)
      }

      throw error;
    });

  return api;
};
