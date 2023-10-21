import { ISchedule } from "@nurejs/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IEventsArgs } from "core/types/events.types";
import { IFetchScheduleProps } from "core/types/fetch.types";

const initialState: IFetchScheduleProps = {
    events: [],
    loading: true,
    error: null,
    payload: {},
};

const fetchEventsSlice = createSlice({
    name: "fetchEvents",
    initialState: initialState,
    reducers: {
        fetchEventsAction: (
            state: IFetchScheduleProps,
            action: PayloadAction<IEventsArgs>
        ) => {
            state.loading = true;
            state.error = null;
            state.payload = action.payload;
        },
        fetchEventsSuccess: (
            state: IFetchScheduleProps,
            action: PayloadAction<ISchedule[]>
        ) => {
            state.loading = false;
            state.events = action.payload;
        },
        fetchEventsError: (
            state: IFetchScheduleProps,
            action: PayloadAction<Error>
        ) => {
            state.loading = false;
            state.error = action.payload;
            state.events = [];
        },
    },
});

export const fetchEventsActions = fetchEventsSlice.actions;
export default fetchEventsSlice;
