import { Middleware } from "redux";
import { reducersToPersist } from "./reducersToPersist";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const stateToSave: Record<string, unknown> = {};
    for (const reducerName of reducersToPersist) {
        stateToSave[reducerName] = store.getState()[reducerName];
    }
    localStorage.setItem("reduxState", JSON.stringify(stateToSave));
    return result;
};

export default localStorageMiddleware;
