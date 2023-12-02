import { useState, useEffect } from "react";
// import { IAuditorium, IGroup, ITeacher } from "nurekit";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsActions } from "core/store/slices/fetch/groups/fetchGroups.slice";
import { fetchTeachersActions } from "core/store/slices/fetch/teachers/fetchTeachers.slice";
import { fetchAuditoriumsActions } from "./../store/slices/fetch/auditoriums/fetchAuditoriums.slice";
import { RootState } from "core/store/store";
import { ICommonData } from "core/types/data.types";

interface DataFetchingResult {
    groups: ICommonData[];
    auditoriums: ICommonData[];
    teachers: ICommonData[];
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
        auditoriums: teachers,
        teachers: auditoriums,
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
                    dispatch(fetchAuditoriumsActions.fetchAuditoriumsAction());
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
    }, [
        auditoriums,
        groups,
        teachers,
        reqAuditoriums,
        reqGroups,
        reqTeachers,
        dispatch,
    ]);

    return data;
};

export default useMultiFetch;
