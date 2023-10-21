import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { groupsActions } from "core/store/slices/group.slice";
import { uiActions } from "core/store/slices/ui.slice";
import { teachersActions } from "core/store/slices/teachers.slice";

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
        () =>
            bindActionCreators(
                { ...groupsActions, ...uiActions, ...teachersActions },
                dispatch
            ),
        [dispatch]
    );
};
