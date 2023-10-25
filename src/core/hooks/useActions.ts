import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { uiActions } from "core/store/slices/ui.slice";
import { dataActions } from "core/store/slices/data.slice";
import { filterActions } from "core/store/slices/filter.slice";

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
        () =>
            bindActionCreators(
                {
                    ...uiActions,
                    ...dataActions,
                    ...filterActions,
                },
                dispatch
            ),
        [dispatch]
    );
};
