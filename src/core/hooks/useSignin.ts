import { LOCAL_KEYS } from "core/constants";
import { IAuthTokens } from "core/interfaces/auth.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { transformAuthError } from "core/utils/transformAuthError";

export const useSignin = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const signin = async (data: TAuthInput) => {
        setLoading(true);
        try {
            const res = await axiosClient.post<IAuthTokens>("/login", data);

            localStorage.setItem(
                LOCAL_KEYS.AUTH_TOKENS,
                res.data.access_token as string
            );

            setLoading(false);
            navigate("/");
        } catch (error) {
            setLoading(false);
            console.error(`useSignin error: ${error}`);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setError(transformAuthError(error.response.data.message));
        }
    };

    return { signin, isLoading, error };
};
