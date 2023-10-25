import { put, takeEvery } from "redux-saga/effects";

import fetchEventsActions from "core/store/slices/fetch/events/fetchEvents.slice";

import { ISchedule } from "@nurejs/api";

import { IEventsArgs } from "core/types/events.types";
import { PayloadAction } from "@reduxjs/toolkit";
import nurekit from "core/services/nurekit.serivce";
import { getMonth } from "core/utils/getMonth";
import { IError } from "core/types/error.types";

function* fetchEventsSaga(action: PayloadAction<IEventsArgs>) {
    try {
        const { firstDay, lastDay } = getMonth();
        if (action.payload.type === "group") {
            const res: ISchedule[] = yield nurekit.groups.getSchedule({
                groupName: action.payload.name,
                startTime: firstDay,
                endTime: lastDay,
            });
            yield put(fetchEventsActions.actions.fetchEventsSuccess(res));
        }

        if (action.payload.type === "teacher") {
            const res: ISchedule[] = yield nurekit.teachers.getSchedule({
                teacherName: action.payload.name,
                startTime: firstDay,
                endTime: lastDay,
            });
            yield put(fetchEventsActions.actions.fetchEventsSuccess(res));
        }

        if (action.payload.type === "auditorium") {
            const res: ISchedule[] = yield nurekit.auditoriums.getSchedule({
                auditoriumName: action.payload.name,
                startTime: firstDay,
                endTime: lastDay,
            });
            yield put(fetchEventsActions.actions.fetchEventsSuccess(res));
        }
    } catch (error: unknown) {
        yield put(fetchEventsActions.actions.fetchEventsError(error as IError));
    }
}

export function* watchFetchGroupsEvents() {
    yield takeEvery(
        fetchEventsActions.actions.fetchEventsAction.type,
        fetchEventsSaga
    );
}
