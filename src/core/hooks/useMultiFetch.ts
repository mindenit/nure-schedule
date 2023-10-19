import { useState, useEffect } from "react";
import { IAuditorium, IGroup, ITeacher } from "@nurejs/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsActions } from "core/store/slices/fetch/groups/fetchGroups.slice";
import { fetchTeachersActions } from "core/store/slices/fetch/teachers/fetchTeachers.slice";
import { fetchAuditoriumsActions } from "./../store/slices/fetch/auditoriums/fetchAuditoriums.slice";
import { RootState } from "core/store/store";

interface DataFetchingResult {
    groups: IGroup[];
    auditoriums: IAuditorium[];
    teachers: ITeacher[];
    loading: boolean;
    error?: Error;
}

const useMultiFetch = (
    reqGroups: boolean = false,
    reqAuditoriums: boolean = false,
    reqTeachers: boolean = false
): DataFetchingResult => {
    const { groups } = useSelector((state: RootState) => state.fetchGroups);
    const { teachers } = useSelector((state: RootState) => state.fetchTeachers);
    const { auditoriums } = useSelector(
        (state: RootState) => state.fetchAuditoriums
    );
    const [data, setData] = useState<DataFetchingResult>({
        groups: groups,
        auditoriums: auditoriums,
        teachers: teachers,
        loading: true,
        error: undefined,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            if (reqGroups) {
                if (groups.length === 0)
                    dispatch(fetchGroupsActions.fetchGroupsAction());
            }

            if (reqTeachers) {
                if (teachers.length === 0)
                    dispatch(fetchTeachersActions.fetchTeachersAction());
            }

            if (reqAuditoriums) {
                if (auditoriums.length === 0)
                    dispatch(fetchAuditoriumsActions.fetchAuditoriumssAction());
            }
            setData({
                groups: groups,
                teachers: teachers,
                auditoriums: auditoriums,
                loading: false,
                error: undefined,
            });
        } catch (error: unknown) {
            setData({
                groups: [],
                teachers: [],
                auditoriums: [],
                loading: false,
                error: error as Error,
            });
        }
    }, []);

    return data;
};

export default useMultiFetch;
