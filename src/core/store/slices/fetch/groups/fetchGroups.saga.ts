import { call, put, takeLatest } from "redux-saga/effects";

import fetchGroupsActions from "core/store/slices/fetch/groups/fetchGroups.slice";

import nurekit from "core/services/nurekit.serivce";
import { IGroupExtended } from "core/types/data.types";

function* fetchGroupsSaga() {
    try {
        const res: IGroupExtended[] = yield call(nurekit.groups.findMany);
        yield put(fetchGroupsActions.actions.fetchGroupsSuccess(res));
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
