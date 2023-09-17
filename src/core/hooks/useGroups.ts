import { useState, useEffect } from "react";

import nurekit from "core/services/nurekit.serivce";
import { GroupsManyOutput } from "core/interfaces/nurekit.types";

interface GroupsFetchingResult {
    groups: GroupsManyOutput[];
    loading: boolean;
    error: Error | null;
}

const useGroupsFetching = (): GroupsFetchingResult => {
    const [groups, setGroups] = useState<GroupsManyOutput[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await nurekit.groups.findMany();
                setGroups(result);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { groups, loading, error };
};

export default useGroupsFetching;
