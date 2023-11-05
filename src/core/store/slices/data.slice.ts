import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommonData } from "core/types/data.types";

interface IState {
    activeItem: ICommonData | null;
    allSelectedItems: ICommonData[];
}

const initialState: IState = {
    activeItem: null,
    allSelectedItems: [],
};

const findNextActiveElement = <T>(elements: T[], remodedIndex: number) => {
    if (elements.length === 0) return null;
    if (remodedIndex < elements.length) return elements[remodedIndex];
    return elements[remodedIndex - 1];
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setActiveItem(state, action: PayloadAction<ICommonData>) {
            state.activeItem = action.payload;
        },
        addItem(state, action: PayloadAction<ICommonData>) {
            const exists = state.allSelectedItems.some(
                (element: ICommonData) => element.id === action.payload.id
            );
            if (!exists) {
                state.allSelectedItems.push(action.payload);
                state.activeItem = action.payload;
            }
        },
        removeItem(state, action: PayloadAction<ICommonData>) {
            const removedItemId = action.payload.id;
            const removedItemIndex = state.allSelectedItems.findIndex(
                (group: ICommonData) => group.id === removedItemId
            );
            if (removedItemIndex !== -1) {
                state.allSelectedItems.splice(removedItemIndex, 1);
                state.activeItem = findNextActiveElement(
                    state.allSelectedItems,
                    removedItemIndex
                );
            }
        },
    },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
