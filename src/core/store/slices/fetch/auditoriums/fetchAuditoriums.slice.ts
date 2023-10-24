import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuditoriumExtended, ICommonData } from "core/types/data.types";

interface IState {
    auditoriums: ICommonData[];
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
        fetchAuditoriumsAction: (state: IState) => {
            state.loading = true;
            state.error = null;
        },
        fetchAuditoriumsSuccess: (
            state: IState,
            action: PayloadAction<IAuditoriumExtended[]>
        ) => {
            state.loading = false;
            state.auditoriums = action.payload.map((el) => {
                const { lastRequest, isActive, ...cleared } = el;
                cleared.type = "auditorium";
                return cleared;
            });
            state.error = null;
        },
        fetchAuditoriumsError: (
            state: IState,
            action: PayloadAction<Error>
        ) => {
            state.loading = false;
            state.auditoriums = [];
            state.error = action.payload;
        },
    },
});

export const fetchAuditoriumsActions = fetchAuditoriumsSlice.actions;
export default fetchAuditoriumsSlice;
