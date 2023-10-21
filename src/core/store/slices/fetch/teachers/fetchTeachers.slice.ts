import { ITeacher } from "@nurejs/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    teachers: ITeacher[];
    loading: boolean;
    error: null | Error;
}

const initialState: IState = {
    teachers: [],
    loading: true,
    error: null,
};

const fetchTeachersSlice = createSlice({
    name: "fetchTeachers",
    initialState: initialState,
    reducers: {
        fetchTeachersAction: (state: IState) => {
            state.loading = true;
            state.error = null;
        },
        fetchTeachersSuccess: (
            state: IState,
            action: PayloadAction<ITeacher[]>
        ) => {
            state.loading = false;
            state.teachers = action.payload;
        },
        fetchTeachersError: (state: IState, action: PayloadAction<Error>) => {
            state.loading = false;
            state.error = action.payload;
            state.teachers = [];
        },
    },
});

export const fetchTeachersActions = fetchTeachersSlice.actions;
export default fetchTeachersSlice;
