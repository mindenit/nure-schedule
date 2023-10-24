import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://nure-dev.pp.ua/api",
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const res = error.response;
        if (res.status == 401) {
            window.location.href = "/signin";
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
