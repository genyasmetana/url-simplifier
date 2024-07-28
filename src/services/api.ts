import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IPostData {
  url: string;
}

const BASE_URL = 'https://spoo.me';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(config);

export const postSimplifiedUrl = async (data: IPostData) => {
  return await axiosInstance.post('', data);
};
