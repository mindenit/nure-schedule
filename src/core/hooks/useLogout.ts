import { LOCAL_KEYS } from "core/constants";
import axiosClient from "core/services/axios.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    // const token = localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS);

    const logout = async () => {
        setLoading(true);

        try {
            await axiosClient.post(
                "logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            LOCAL_KEYS.AUTH_TOKENS
                        )}`,
                    },
                }
            );

            localStorage.removeItem(LOCAL_KEYS.AUTH_TOKENS);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.error(`logout error: ${error}`);
            localStorage.removeItem(LOCAL_KEYS.AUTH_TOKENS);
            setLoading(false);
            setError(error);
        }
    };

    return { logout, isLoading, error };
};
