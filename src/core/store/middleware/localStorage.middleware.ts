import { Middleware } from "redux";
import { RootState } from "../store";

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);
        const state = store.getState() as RootState;

        try {
            const selectedData = {
                ui: state.ui,
                group: state.groups,
                teacher: state.teachers,
            };
            localStorage.setItem("storeData", JSON.stringify(selectedData));
        } catch (error) {
            console.error("Error saving state to localStorage:", error);
        }

        return result;
    };
