import axios from "axios";



export function authInterceptor() {
  axios.interceptors.request.use((req) => {
    req.headers.authorization = "my secret token";
    return req;
  });
}