import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./rootReducer";
import localStorageMiddleware from "./middleware/localStorage.middleware";

import { rootSaga } from "core/store/sagas/sagas";
import { restoreState } from "./middleware/restoreStore";

const sagaMiddleware = createSagaMiddleware();
const middleware = [localStorageMiddleware, sagaMiddleware];

const initialState = restoreState();

const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
