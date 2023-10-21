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
            await axiosClient.post<IUser>("/register", data);

            setLoading(false);
            navigate("/signin");
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return { signup, isLoading, error };
};
