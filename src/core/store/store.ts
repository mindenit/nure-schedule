import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import uiSlice from "./slices/ui.slice";
import groupsSlice from "./slices/group.slice";
import { localStorageMiddleware } from "./middleware/localStorage.middleware";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        groups: groupsSlice.reducer,
    },
    middleware: [...getDefaultMiddleware(), localStorageMiddleware],
    devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
