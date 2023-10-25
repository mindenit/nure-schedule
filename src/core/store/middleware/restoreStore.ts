import { reducersToPersist } from "./reducersToPersist";

export const restoreState = () => {
    const savedState = localStorage.getItem("reduxState");
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        const initialState: Record<string, unknown> = {};
        for (const reducerName of reducersToPersist) {
            initialState[reducerName] = parsedState[reducerName];
        }
        return initialState;
    }

    return undefined;
};
