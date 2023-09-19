import { useState, useEffect } from "react";
import nurekit from "core/services/nurekit.serivce";
import {
    IGroupsManyOutput,
    IAuditoriumsManyOutput,
    ITeachersManyOutput,
} from "core/interfaces/nurekit.types";

interface DataFetchingResult {
    groups: IGroupsManyOutput[];
    auditoriums: IAuditoriumsManyOutput[];
    teachers: ITeachersManyOutput[];
    loading: boolean;
    error: Error | null;
}

const useMultiFetch = (
    fetchGroups: boolean = false,
    fetchAuditoriums: boolean = false,
    fetchTeachers: boolean = false
): DataFetchingResult => {
    const [data, setData] = useState<DataFetchingResult>({
        groups: [],
        auditoriums: [],
        teachers: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = [];

                if (fetchGroups) {
                    promises.push(nurekit.groups.findMany());
                }

                if (fetchAuditoriums) {
                    promises.push(nurekit.auditoriums.findMany());
                }

                if (fetchTeachers) {
                    promises.push(nurekit.teachers.findMany());
                }

                const results = await Promise.all(promises);

                setData({
                    groups: fetchGroups
                        ? (results.shift() as IGroupsManyOutput[])
                        : data.groups,
                    auditoriums: fetchAuditoriums
                        ? (results.shift() as IAuditoriumsManyOutput[])
                        : data.auditoriums,
                    teachers: fetchTeachers
                        ? (results.shift() as ITeachersManyOutput[])
                        : data.teachers,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setData({
                    groups: data.groups,
                    auditoriums: data.auditoriums,
                    teachers: data.teachers,
                    loading: false,
                    error: error as Error,
                });
            }
        };

        fetchData();
    }, [
        fetchGroups,
        fetchAuditoriums,
        fetchTeachers,
        data.groups,
        data.auditoriums,
        data.teachers,
    ]);

    return data;
};

export default useMultiFetch;
