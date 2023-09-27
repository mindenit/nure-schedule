import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@nurejs/api";

interface IState {
    allSelectedGroups: IGroup[];
    activeGroup: IGroup | null;
}
const initialState: IState = {
    allSelectedGroups: [],
    activeGroup: null,
};

const initializeStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("storeData");
        if (serializedState) {
            const savedState = JSON.parse(serializedState);
            return { ...initialState, ...savedState.groups };
        }
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
    }
    return initialState;
};

const findNextActiveGroup = (groups: IGroup[], removedGroupIndex: number) => {
    if (groups.length === 0) {
        return null;
    }
    if (removedGroupIndex < groups.length) {
        return groups[removedGroupIndex];
    }
    return groups[removedGroupIndex - 1];
};

const groupsSlice = createSlice({
    name: "groups",
    initialState: initializeStateFromLocalStorage(),
    reducers: {
        setActiveGroup(state, action: PayloadAction<IGroup>) {
            state.activeGroup = action.payload;
        },
        addGroup(state, action: PayloadAction<IGroup>) {
            const exists = state.allSelectedGroups.some(
                (group: IGroup) => group.id === action.payload.id
            );

            if (!exists) {
                state.allSelectedGroups.push(action.payload);
                state.activeGroup = action.payload;
            }
        },
        removeGroup(state, action: PayloadAction<IGroup>) {
            const removedGroupId = action.payload.id;
            const removedGroupIndex = state.allSelectedGroups.findIndex(
                (group: IGroup) => group.id === removedGroupId
            );

            if (removedGroupIndex !== -1) {
                state.allSelectedGroups.splice(removedGroupIndex, 1);

                // Обновляем активную группу
                state.activeGroup = findNextActiveGroup(
                    state.allSelectedGroups,
                    removedGroupIndex
                );
            }
        },
    },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
