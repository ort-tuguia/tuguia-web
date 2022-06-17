import axios from 'axios'
import { useRouter } from 'next/router'
const apiConnection = axios.create({
    //baseURL:'http://localhost:8080/api',
    baseURL : 'https://ort-tuguia-api.herokuapp.com/api',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiConnection.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    let response = error?.response?.data;
    if (response?.httpStatus == "UNAUTHORIZED" || (response?.httpStatus == "BAD_REQUEST" && response?.message?.includes("Sesión expirada"))) {
        localStorage.removeItem("token");
        location.replace("/auth");
    }
    return Promise.reject(error);
});

export default apiConnection