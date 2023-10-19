import { put, takeEvery } from "redux-saga/effects";

import fetchEventsActions from "core/store/slices/fetch/events/fetchEvents.slice";

import { ISchedule } from "@nurejs/api";
import { fetchEvents } from "core/utils/fetchEvents";

import { IEventsArgs } from "core/types/events.types";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchEventsSaga(action: PayloadAction<IEventsArgs>) {
    try {
        const res: ISchedule[] = yield fetchEvents(action.payload);
        yield put(fetchEventsActions.actions.fetchEventsSuccess(res));
    } catch (error: unknown) {
        yield put(fetchEventsActions.actions.fetchEventsError(error as Error));
    }
}

export function* watchFetchEvents() {
    yield takeEvery(
        fetchEventsActions.actions.fetchEventsAction.type,
        fetchEventsSaga
    );
}
