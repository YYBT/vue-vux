import axios from "axios"

import vue from "vue"

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 请求拦截器

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 封装axios的post请求

export function postData(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)

      .then(response => {
        resolve(response.data);
      })

      .catch(error => {
        reject(error);
      });
  });
}

// get请求
export function getData(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)

      .then(response => {
        resolve(response.data);
      })

      .catch(error => {
        reject(error);
      });
  });
}



export default {
  getBanner(url, params){
      return getData(url, params);
  },
  JH_news(url, params) {
    return postData(url, params);
  }

};
