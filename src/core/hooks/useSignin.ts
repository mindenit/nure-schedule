import { LOCAL_KEYS } from "core/constants";
import { IAuthTokens } from "core/interfaces/auth.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const signin = async (data: TAuthInput) => {
        setLoading(true);
        try {
            const res = await axiosClient.post<IAuthTokens>("/login", data);

            localStorage.setItem(
                LOCAL_KEYS.AUTH_TOKENS,
                JSON.stringify(res.data)
            );

            setLoading(false);
            navigate("/");
        } catch (e) {
            setLoading(false);
            setError(error);
        }
    };

    return { signin, isLoading, error };
};
