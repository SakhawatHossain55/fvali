import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data.data;

// const get = (url: string) => {
//     return instance.get(url)
//     .then(responseBody)
// }

// const post = (url: string, body: object) => {
//     return instance.post(url, body)
//     .then(responseBody)
// }

// const patch = (url: string, body: object) => {
//     return instance.patch(url, body)
//     .then(responseBody)
// }

// const _delete = (url: string) => {
//     return instance.delete(url)
//     .then(responseBody)
// }

// const get = (url: string) => instance.get(url).then(responseBody)

// const post = (url: string, body: object) => instance.post(url, body).then(responseBody)

// const patch = (url: string, body: object) => instance.patch(url, body).then(responseBody)

// const _delete = (url: string) => instance.delete(url).then(responseBody)

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),

  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),

  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),

  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
