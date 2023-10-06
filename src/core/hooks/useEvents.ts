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
    const [isError, setError] = useState<unknown | Error>(null);

    useEffect(() => {
        const fetcher = async () => {
            setLoading(true);

            try {
                const events = await fetchEvents(args);
                setLoading(false);
                setEvents(events);
                setError(null);
            } catch (err: unknown) {
                setError(err);
                setLoading(false);
            }
        };

        fetcher();
    }, []);

    return { events, isLoading, isError };
};
