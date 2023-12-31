import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILessonFilter } from "core/interfaces/filters.interface";
import { ICommonData } from "core/types/data.types";

interface IState {
    teachersFilter: ICommonData[];
    auditoriumsFilter: ICommonData[];
    lessonsFilter: ILessonFilter[];
}

const initialState: IState = {
    teachersFilter: [],
    auditoriumsFilter: [],
    lessonsFilter: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addTeacherInFilter(state: IState, action: PayloadAction<ICommonData>) {
            const exists = state.teachersFilter.some(
                (element: ICommonData) => element.id === action.payload.id
            );
            if (!exists) state.teachersFilter.push(action.payload);
        },
        addAuditoriumInFilter(
            state: IState,
            action: PayloadAction<ICommonData>
        ) {
            const exists = state.auditoriumsFilter.some(
                (element: ICommonData) => element.id === action.payload.id
            );
            if (!exists) state.auditoriumsFilter.push(action.payload);
        },
        addLessonToFilter(state: IState, action: PayloadAction<ILessonFilter>) {
            const exists = state.lessonsFilter.includes(action.payload);
            if (!exists) state.lessonsFilter.push(action.payload);
        },
        resetAuditoriumsFilter(state: IState) {
            state.auditoriumsFilter = [];
        },
        removeTeacherFromFilter(
            state: IState,
            action: PayloadAction<ICommonData>
        ) {
            const removedItemId = action.payload.id;
            const removedItemIndex = state.teachersFilter.findIndex(
                (element: ICommonData) => element.id === removedItemId
            );
            if (removedItemId !== -1)
                state.teachersFilter.splice(removedItemIndex, 1);
        },
        removeAuditoriumFromFilter(
            state: IState,
            action: PayloadAction<ICommonData>
        ) {
            const removedItemId = action.payload.id;
            const removedItemIndex = state.auditoriumsFilter.findIndex(
                (element: ICommonData) => element.id === removedItemId
            );
            if (removedItemId !== -1)
                state.auditoriumsFilter.splice(removedItemIndex, 1);
        },
        removeLessonFromFilter(
            state: IState,
            action: PayloadAction<ILessonFilter>
        ) {
            const removedItemIndex = state.lessonsFilter.findIndex(
                (element: ILessonFilter) => element === action.payload
            );
            state.lessonsFilter.splice(removedItemIndex, 1);
        },
    },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
