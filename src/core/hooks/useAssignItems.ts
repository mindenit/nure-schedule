import { useState } from "react";
import { useSelector } from "react-redux";

import axiosClient from "core/services/axios.service";
import { RootState } from "core/store/store";
import { LOCAL_KEYS } from "core/constants";
import { ICommonData } from "core/types/data.types";

interface IResponse {
    groups: ICommonData[];
}

export const useAssignItems = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);
    const [responseData, setResponseData] = useState<IResponse | null>(null);
    const { allSelectedItems } = useSelector((state: RootState) => state.data);
    const { groups } = useSelector((state: RootState) => state.fetchGroups);
    const assignItems = async () => {
        setLoading(true);
        setResponseData(null);
        try {
            const ids = allSelectedItems.map((item) => item.id);
            const matchingGroups = groups.filter((group) =>
                ids.includes(group.id)
            );
            const matchingGroupIds = matchingGroups.map((group) => group.id);
            matchingGroupIds.forEach(async (id) => {
                const requestData = {
                    groupId: id,
                };
                const res = await axiosClient.post(
                    "/user/assign-group",
                    requestData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                LOCAL_KEYS.AUTH_TOKENS
                            )}`,
                        },
                    }
                );
                console.log(`res.data: ${res.data}`);
                console.log(`res.headers: ${res.headers}`);
            });
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
            console.log(`assign-group POST error: ${error}`);
        }
    };

    const getAssignItems = async () => {
        setLoading(true);
        setResponseData(null);
        try {
            const { data } = await axiosClient.get("/user/groups", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        LOCAL_KEYS.AUTH_TOKENS
                    )}`,
                },
            });
            setResponseData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setResponseData(null);
            setLoading(false);
            console.error(`assign-group GET error: ${error}`);
        }
    };

    return { isLoading, error, assignItems, getAssignItems, responseData };
};
