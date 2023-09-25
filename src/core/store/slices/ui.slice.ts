import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
