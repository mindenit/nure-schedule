import { call, put, takeLatest } from "redux-saga/effects";

import fetchGroupsActions from "core/store/slices/fetch/groups/fetchGroups.slice";

import nurekit from "core/services/nurekit.serivce";
import { IGroup } from "@nurejs/api";

function* fetchGroupsSaga() {
    try {
        const groups: IGroup[] = yield call(nurekit.groups.findMany);
        yield put(fetchGroupsActions.actions.fetchGroupsSuccess(groups));
    } catch (error: unknown) {
        yield put(fetchGroupsActions.actions.fetchGroupsError(error as Error));
    }
}

export function* watchFetchGroups() {
    yield takeLatest(
        fetchGroupsActions.actions.fetchGroupsAction.type,
        fetchGroupsSaga
    );
}
