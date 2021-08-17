import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 1500,
});

const responseBody = () => (response: AxiosResponse) => response.data.data;

const requests = {
  get: (url: string) => {
    instance.get(url).then(responseBody);
  },
  post: (url: string, body: object) => {
    instance.get(url, body).then(responseBody);
  },
  patch: (url: string, body: object) => {
    instance.get(url, body).then(responseBody);
  },
  delete: (url: string) => {
    instance.get(url).then(responseBody);
  },
};

export default requests;
