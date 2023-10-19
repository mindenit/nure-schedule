import { IAuthTokens } from "core/interfaces/auth.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { useState } from "react";

export const useSignin = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const signin = async (data: TAuthInput) => {
        setLoading(true);
        try {
            const res = await axiosClient.post<IAuthTokens>("/login", data);

            localStorage.setItem("auth_tokens", JSON.stringify(res.data));

            setLoading(false);
            return res.data;
        } catch (e) {
            setLoading(false);
            setError(error);
        }
    };

    return { signin, isLoading, error };
};
