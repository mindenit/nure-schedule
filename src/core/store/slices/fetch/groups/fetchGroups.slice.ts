import { IGroup } from "@nurejs/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    groups: IGroup[];
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
            action: PayloadAction<IGroup[]>
        ) => {
            state.loading = false;
            state.groups = action.payload;
        },
        fetchGroupsError: (state: IState, action: PayloadAction<Error>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const fetchGroupsActions = fetchGroupSlice.actions;
export default fetchGroupSlice;
