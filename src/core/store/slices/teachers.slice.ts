import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacher } from "@nurejs/api";

interface IState {
    allSelectedTeachers: ITeacher[];
    activeTeacher: ITeacher | null;
}
const initialState: IState = {
    allSelectedTeachers: [],
    activeTeacher: null,
};

const initializeStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("storeData");
        if (serializedState) {
            const savedState = JSON.parse(serializedState);
            return { ...initialState, ...savedState.teachers };
        }
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
    }
    return initialState;
};

const findNextactiveTeacher = (
    teachers: ITeacher[],
    removedTeacherIndex: number
) => {
    if (teachers.length === 0) return null;

    if (removedTeacherIndex < teachers.length) {
        return teachers[removedTeacherIndex];
    }
    return teachers[removedTeacherIndex - 1];
};

const teachersSlice = createSlice({
    name: "teachers",
    initialState: initializeStateFromLocalStorage(),
    reducers: {
        setactiveTeacher(state, action: PayloadAction<ITeacher>) {
            state.activeTeacher = action.payload;
        },
        addTeacher(state, action: PayloadAction<ITeacher>) {
            const exists = state.allSelectedTeachers.some(
                (teacher: ITeacher) => teacher.id === action.payload.id
            );
            if (!exists) {
                state.allSelectedTeachers.push(action.payload);
                state.activeTeacher = action.payload;
            }
        },
        removeteacher(state, action: PayloadAction<ITeacher>) {
            const removedTeacherId = action.payload.id;
            const removedTeacherIndex = state.allSelectedTeachers.findIndex(
                (teacher: ITeacher) => teacher.id === removedTeacherId
            );

            if (removedTeacherIndex !== -1) {
                state.allSelectedTeachers.splice(removedTeacherIndex, 1);
                state.activeTeacher = findNextactiveTeacher(
                    state.allSelectedTeachers,
                    removedTeacherIndex
                );
            }
        },
    },
});

export const teachersActions = teachersSlice.actions;
export default teachersSlice;
