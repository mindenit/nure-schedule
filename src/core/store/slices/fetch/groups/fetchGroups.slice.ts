import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICommonData, IGroupExtended } from "core/types/data.types";

interface IState {
    groups: ICommonData[];
    loading: boolean;
    error: null | Error;
}

const initialState: IState = {
    groups: [],
    loading: true,
    error: null,
};

const fetchGroupSlice = createSlice({
    name: "fetchGroups",
    initialState: initialState,
    reducers: {
        fetchGroupsAction: (state: IState) => {
            state.loading = true;
            state.error = null;
        },
        fetchGroupsSuccess: (
            state: IState,
            action: PayloadAction<IGroupExtended[]>
        ) => {
            state.loading = false;
            state.groups = action.payload.map((el) => {
                const { lastRequest, isActive, ...cleared } = el;
                cleared.type = "group";
                return cleared;
            });
        },
        fetchGroupsError: (state: IState, action: PayloadAction<Error>) => {
            state.loading = false;
            state.error = action.payload;
            state.groups = [];
        },
    },
});

export const fetchGroupsActions = fetchGroupSlice.actions;
export default fetchGroupSlice;
