import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://nure-dev.pp.ua/api",
});

export default axiosClient;
