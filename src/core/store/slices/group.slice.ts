import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@nurejs/api";

interface IState {
    allSelectedGroups: IGroup[];
    activeGroupId: number;
}
const initialState: IState = {
    allSelectedGroups: [],
    activeGroupId: 0,
};

const initializeStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("myAppData");
        if (serializedState) {
            const savedState = JSON.parse(serializedState);
            return { ...initialState, ...savedState.groups };
        }
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
    }
    return initialState;
};

const groupsSlice = createSlice({
    name: "groups",
    initialState: initializeStateFromLocalStorage(),
    reducers: {
        setActiveGroup(state, action: PayloadAction<IGroup>) {
            state.activeGroupId = action.payload.id;
        },
        addGroup(state, action: PayloadAction<IGroup>) {
            const exists = state.allSelectedGroups.some(
                (group: IGroup) => group.id === action.payload.id
            );

            if (!exists) state.allSelectedGroups.push(action.payload);
        },
        removeGroup(state, action: PayloadAction<IGroup>) {
            state.allSelectedGroups = state.allSelectedGroups.filter(
                (group: IGroup) => group.id !== action.payload.id
            );
            if (state.activeGroupId === action.payload.id)
                state.activeGroupId = 0;
        },
    },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
