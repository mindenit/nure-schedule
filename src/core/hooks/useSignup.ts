import { LOCAL_KEYS } from "core/constants";
import { IUser } from "core/interfaces/user.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const signup = async (data: TAuthInput) => {
        setLoading(true);
        try {
            const res = await axiosClient.post<IUser>("/register", data);

            const { access_token, refresh_token } = res.data;

            localStorage.setItem(
                LOCAL_KEYS.CURRENT_USER,
                JSON.stringify(res.data)
            );

            localStorage.setItem(
                LOCAL_KEYS.AUTH_TOKENS,
                JSON.stringify({ access_token, refresh_token })
            );

            setLoading(false);
            navigate("/");
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return { signup, isLoading, error };
};
