import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const API = {
  get: function <T>(
    path: string,
    params = {},
    options: AxiosRequestConfig = {},
  ) {
    return instance.get<T>(path, {
      params,
      ...options,
    });
  },
  post: function <T>(
    path: string,
    data = {},
    options: AxiosRequestConfig = {},
  ) {
    return instance.post<T>(path, data, options);
  },
  put: function <T>(path: string, data = {}, options: AxiosRequestConfig = {}) {
    return instance.put<T>(path, data, options);
  },
  delete: function <T>(
    path: string,
    data = {},
    options: AxiosRequestConfig = {},
  ) {
    return instance.delete<T>(path, {
      data,
      ...options,
    });
  },
};
