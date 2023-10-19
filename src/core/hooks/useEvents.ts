import { RootState } from "core/store/store";
import { IEventsArgs } from "core/types/events.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsActions } from "core/store/slices/fetch/events/fetchEvents.slice";

export const useEvents = (args: IEventsArgs) => {
    const { events, loading, error } = useSelector(
        (state: RootState) => state.fetchEvents
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventsActions.fetchEventsAction(args));
    }, [args.name]);

    return { events, loading, error };
};
