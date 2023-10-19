import { call, put, takeLatest } from "redux-saga/effects";

import fetchAuditoriumsActions from "./fetchAuditoriums.slice";

import nurekit from "core/services/nurekit.serivce";
import { IAuditorium } from "@nurejs/api";

function* fetchAuditoriumsSaga() {
    try {
        const res: IAuditorium[] = yield call(nurekit.auditoriums.findMany);
        yield put(
            fetchAuditoriumsActions.actions.fetchAuditoriumssSuccess(res)
        );
    } catch (error: unknown) {
        yield put(
            fetchAuditoriumsActions.actions.fetchAuditoriumsError(
                error as Error
            )
        );
    }
}

export function* watchFetchAuditoriums() {
    yield takeLatest(
        fetchAuditoriumsActions.actions.fetchAuditoriumssAction.type,
        fetchAuditoriumsSaga
    );
}
