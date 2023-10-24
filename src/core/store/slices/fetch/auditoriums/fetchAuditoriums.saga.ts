import { call, put, takeLatest } from "redux-saga/effects";

import fetchAuditoriumsActions from "./fetchAuditoriums.slice";

import nurekit from "core/services/nurekit.serivce";
import { IAuditoriumExtended } from "core/types/data.types";

function* fetchAuditoriumsSaga() {
    try {
        const res: IAuditoriumExtended[] = yield call(
            nurekit.auditoriums.findMany
        );
        yield put(fetchAuditoriumsActions.actions.fetchAuditoriumsSuccess(res));
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
        fetchAuditoriumsActions.actions.fetchAuditoriumsAction.type,
        fetchAuditoriumsSaga
    );
}
