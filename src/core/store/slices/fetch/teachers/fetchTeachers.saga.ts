import { call, put, takeLatest } from "redux-saga/effects";

import fetchTeachersSlice from "./fetchTeachers.slice";

import nurekit from "core/services/nurekit.serivce";
import { ITeacher } from "nurekit";

function* fetchTeachersSaga() {
    try {
        const res: ITeacher[] = yield call(nurekit.teachers.findMany);
        yield put(fetchTeachersSlice.actions.fetchTeachersSuccess(res));
    } catch (error: unknown) {
        yield put(
            fetchTeachersSlice.actions.fetchTeachersError(error as Error)
        );
    }
}

export function* watchFetchTeachers() {
    yield takeLatest(
        fetchTeachersSlice.actions.fetchTeachersAction.type,
        fetchTeachersSaga
    );
}
