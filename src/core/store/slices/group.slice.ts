import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GroupProps {
    id: number;
    name: string;
}

const groupsSlice = createSlice({
    name: "groups",
    initialState: {
        allGroups: [],
        activeGroupId: 0,
    },
    reducers: {
        setActiveGroup(state, action: PayloadAction<GroupProps>) {
            state.activeGroupId = action.payload.id;
        },
    },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
