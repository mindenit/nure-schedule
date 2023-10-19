import { IAuditorium } from "@nurejs/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    auditoriums: IAuditorium[];
    loading: boolean;
    error: null | Error;
}

const initialState: IState = {
    auditoriums: [],
    loading: true,
    error: null,
};

const fetchAuditoriumsSlice = createSlice({
    name: "fetchAuditoriums",
    initialState: initialState,
    reducers: {
        fetchAuditoriumssAction: (state: IState) => {
            state.loading = true;
            state.error = null;
        },
        fetchAuditoriumssSuccess: (
            state: IState,
            action: PayloadAction<IAuditorium[]>
        ) => {
            state.loading = false;
            state.auditoriums = action.payload;
        },
        fetchAuditoriumsError: (
            state: IState,
            action: PayloadAction<Error>
        ) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const fetchAuditoriumsActions = fetchAuditoriumsSlice.actions;
export default fetchAuditoriumsSlice;
