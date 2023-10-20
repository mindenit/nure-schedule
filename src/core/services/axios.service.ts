import axios from "axios";
import { LOCAL_KEYS } from "core/constants";

const axiosClient = axios.create({
    baseURL: "https://nure-dev.pp.ua/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS)}`,
    },
});

export default axiosClient;
