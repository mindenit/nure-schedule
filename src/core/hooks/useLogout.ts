import { LOCAL_KEYS } from "core/constants";
import axiosClient from "core/services/axios.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const token = localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS);

    const logout = async () => {
        setLoading(true);

        try {
            console.log(token?.slice(0, -1).slice(0, 0));

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
            console.log(error);
            setLoading(false);
            setError(error);
        }
    };

    return { logout, isLoading, error };
};
