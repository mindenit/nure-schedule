import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { groupsActions } from "core/store/slices/group.slice";
import { uiActions } from "core/store/slices/ui.slice";

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
        () => bindActionCreators({ ...groupsActions, ...uiActions }, dispatch),
        [dispatch]
    );
};
