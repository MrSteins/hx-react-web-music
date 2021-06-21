import axios from 'axios';

import { BASE_URL, TIMEOUT } from './baseURL';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {

  return config
})

instance.interceptors.response.use( response => {
  return response.data
}, err => {
  switch (err.response.status) {
    case 400:
      console.log('请求错误');
      break;
    case 401:
      console.log('未授权访问');
      break; 
    default:
      console.log('服务器错误');
      break;
  }
  return err
})

export default instance