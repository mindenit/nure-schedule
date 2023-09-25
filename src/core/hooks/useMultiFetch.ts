import { useState, useEffect } from "react";
import nurekit from "core/services/nurekit.serivce";
import { IAuditorium, IGroup, ITeacher } from "@nurejs/api";

interface DataFetchingResult {
    groups: IGroup[];
    auditoriums: IAuditorium[];
    teachers: ITeacher[];
    loading: boolean;
    error?: Error;
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
        error: undefined,
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
                        ? (results.shift() as IGroup[])
                        : data.groups,
                    auditoriums: fetchAuditoriums
                        ? (results.shift() as IAuditorium[])
                        : data.auditoriums,
                    teachers: fetchTeachers
                        ? (results.shift() as ITeacher[])
                        : data.teachers,
                    loading: false,
                    error: undefined,
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
    }, []);

    return data;
};

export default useMultiFetch;
