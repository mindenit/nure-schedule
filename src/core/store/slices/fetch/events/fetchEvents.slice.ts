import { ISchedule } from "nurekit";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IError } from "core/types/error.types";
import { IEventsArgs } from "core/types/events.types";
import { IFetchScheduleProps } from "core/types/fetch.types";

const initialState: IFetchScheduleProps = {
    allEvents: [],
    loading: true,
    error: null,
    fetchState: "group",
};

const fetchEventsSlice = createSlice({
    name: "fetchEvents",
    initialState: initialState,
    reducers: {
        setFetchState: (state, action) => {
            state.fetchState = action.payload;
        },
        fetchEventsAction: (
            state: IFetchScheduleProps,
            action: PayloadAction<IEventsArgs>
        ) => {
            state.fetchState = action.payload.type;
            state.loading = true;
            state.error = null;
        },
        fetchEventsSuccess: (
            state: IFetchScheduleProps,
            action: PayloadAction<ISchedule[]>
        ) => {
            state.loading = false;
            state.error = null;
            state.allEvents = action.payload;
        },
        fetchEventsError: (
            state: IFetchScheduleProps,
            action: PayloadAction<IError>
        ) => {
            state.loading = false;
            state.allEvents = [];
            state.error = action.payload;
        },
    },
});

export const fetchEventsActions = fetchEventsSlice.actions;
export default fetchEventsSlice;
