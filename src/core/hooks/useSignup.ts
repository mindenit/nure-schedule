import { IUser } from "core/interfaces/user.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { transformAuthError } from "core/utils/transformAuthError";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const signup = async (data: TAuthInput) => {
        setLoading(true);
        try {
            await axiosClient.post<IUser>("/register", data);

            setLoading(false);
            navigate("/signin");
        } catch (error: unknown) {
            setLoading(false);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setError(transformAuthError(error.response.data.message));
        }
    };

    return { signup, isLoading, error };
};
