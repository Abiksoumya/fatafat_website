import axios from "axios";
import { Config } from '../../config'


export function http() {
  const http = axios.create({
    baseURL: Config.baseUrl,
  });

  return http;
}
// export function attachToken(token: string) {
//   //To be activated later
//   http.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   });
// }
