import axios from "axios";
import { LOCAL_KEYS } from "core/constants";

const localTokens = localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS);

const accessToken = localTokens ? JSON.parse(localTokens).access_token : null;

const axiosClient = axios.create({
    baseURL: "https://nure-dev.pp.ua/api",
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});

export default axiosClient;
