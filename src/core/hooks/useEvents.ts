import { ISchedule } from "@nurejs/api";
import { TFetchEventsType } from "core/types/events.types";
import { fetchEvents } from "core/utils/fetchEvents";
import { useEffect, useState } from "react";

interface IArgs {
    type: TFetchEventsType;
    name: string;
}

export const useEvents = (args: IArgs) => {
    const [events, setEvents] = useState<ISchedule[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const events = await fetchEvents(args);

            setLoading(true);
            setEvents(events);
            setLoading(false);
        };

        fetcher();
    }, [args]);

    return { events, isLoading };
};
