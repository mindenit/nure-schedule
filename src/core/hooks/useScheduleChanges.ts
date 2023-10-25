import axiosClient from "core/services/axios.service";
import { useEffect, useState } from "react";

export const useScheduleChanges = () => {
    const [changes, setChanges] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetcher = async () => {
            setLoading(true);

            try {
                const changes = await axiosClient.get("/user/groups/changes");

                setChanges(changes.data);
                setLoading(false);
            } catch (error) {
                console.error(`/user/groups/changes error: ${error}`);
                setLoading(false);
                setError(error);
            }
        };

        fetcher();
    }, []);

    return { changes, isLoading, error };
};
