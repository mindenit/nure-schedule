import { Middleware } from "redux";
import { RootState } from "../store";

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);
        const state = store.getState() as RootState;
        try {
            localStorage.setItem("storeData", JSON.stringify(state));
        } catch (error) {
            console.error("Error saving state to localStorage:", error);
        }
        return result;
    };
