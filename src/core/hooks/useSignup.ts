import { IUser } from "core/interfaces/user.interface";
import axiosClient from "core/services/axios.service";
import { TAuthInput } from "core/types/auth.types";
import { useState } from "react";

export const useSignup = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const signup = async (data: TAuthInput) => {
        setLoading(true);
        try {
            const res = await axiosClient.post<IUser>("/register", data);

            localStorage.setItem("current_user", JSON.stringify(res.data));

            setLoading(false);
            return res.data;
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return { signup, isLoading, error };
};
