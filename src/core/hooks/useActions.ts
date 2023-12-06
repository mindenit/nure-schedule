import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { dataActions } from "core/store/slices/data.slice";
import { filterActions } from "core/store/slices/filter.slice";
import { uiActions } from "core/store/slices/ui.slice";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(
        {
            ...uiActions,
            ...dataActions,
            ...filterActions,
        },
        dispatch
    );
};
