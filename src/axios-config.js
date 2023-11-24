import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    console.log("Axios Response Interceptor:", response);
    return response;
  },
  (error) => {
    console.error("Axios Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axios;