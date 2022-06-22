import axios from 'axios';

import { getStoredAuthToken } from './authToken';

const defaults = {
  baseURL: process.env.API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : '',
  },
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const api = (method: string, url: string, variables: object) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}/api${url}`,
      method,
      headers: defaults.headers,
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
      validateStatus: function (status) {
        return status < 500;
      },
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          reject(error.response.data.error);
        } else {
          reject(defaults.error);
        }
      }
    );
  });

export default {
  get: (url: string, variables: object) => api('get', url, variables),
  post: (url: string, variables: object) => api('post', url, variables),
  put: (url: string, variables: object) => api('put', url, variables),
  patch: (url: string, variables: object) => api('patch', url, variables),
  delete: (url: string, variables: object) => api('delete', url, variables),
};
