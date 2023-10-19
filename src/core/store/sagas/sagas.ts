import { all, fork } from "redux-saga/effects";
import { watchFetchGroups } from "core/store/slices/fetch/groups/fetchGroups.saga";
import { watchFetchTeachers } from "core/store/slices/fetch/teachers/fetchTeachers.saga";
import { watchFetchAuditoriums } from "core/store/slices/fetch/auditoriums/fetchAuditoriums.saga";
import { watchFetchEvents } from "core/store/slices/fetch/events/fetchEvents.saga";

export function* rootSaga() {
    yield all([
        fork(watchFetchGroups),
        fork(watchFetchTeachers),
        fork(watchFetchAuditoriums),
        fork(watchFetchEvents),
    ]);
}
