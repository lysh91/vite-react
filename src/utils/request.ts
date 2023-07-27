import axios from "axios";
import storage from "good-storage";
const instance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const { headers } = config;
    const { token } =storage.session.get("logInfo") || storage.get("logInfo") || {};
    config.headers = {
          ...headers,
          Authorization: token||'0d451041190d79754874d61c52adbc45',
          Authentication: token||'0d451041190d79754874d61c52adbc45',
    };
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    const code = response.data.errorCode;
      if (code === "10101") {
        storage.remove("logInfo");
        storage.session.remove("logInfo");
        return;
      }
      return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    const { data = {}, status } = error.response || {};
      const errorMsg = data.errorMsg || "";

      if (status === 401) {
        storage.session.remove("logInfo");
        storage.remove("logInfo");
      }

      if (status === 403) {
        return;
      }
    return Promise.reject(errorMsg);
  }
);

export default instance;
// function getAxios(serverUrl: string) {
//   var axiosConfig = {
//     baseURL: serverUrl,
//     timeout: 10000,
//   };

//   var instance = axios.create(axiosConfig);
//   const loginErrCodes = ["10102", "10103"];

//   // 添加请求拦截器
//   instance.interceptors.request.use(
//     function (config:any) {
//       try {
//         const { headers } = config;
//         const { token } =
//           storage.session.get("logInfo") || storage.get("logInfo") || {};
            
//         config.headers = {
//           ...headers,
//           Authorization: token||'0d451041190d79754874d61c52adbc45',
//           Authentication: token||'0d451041190d79754874d61c52adbc45',
//         };
//         return config;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     function (error) {
//       // 对请求错误做些什么
//       return Promise.reject(error);
//     }
//   );

//   // 添加响应拦截器
//   instance.interceptors.response.use(
//     function (response:any) {
//       const code = response.data.errorCode;
//       const source = storage.get("source");
//       if (loginErrCodes.includes(code)) {
//         // TODO: message
//         return;
//       }

//       if (code === "10101") {
//         storage.remove("logInfo");
//         storage.session.remove("logInfo");
//         return;
//       }
//       return response.data;
//     },
//     function (error) {
//       // 对响应错误做点什么
//       const { data = {}, status } = error.response || {};
//       const errorMsg = data.errorMsg || "";

//       if (status === 401) {
//         storage.session.remove("logInfo");
//         storage.remove("logInfo");
//       }

//       if (status === 403) {
//         return;
//       }
//     }
//   );
//   return instance;
// }
// export default getAxios(import.meta.env.VITE_APP_PROXY_URL+'/major-server');


// export const axiosCore = getAxios(import.meta.env.VITE_APP_PROXY_URL+'/core-server');
