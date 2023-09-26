import { ISchedule } from "@nurejs/api";
import { TFetchEventsType } from "core/types/events.types";
import { fetchEvents } from "core/utils/fetchEvents";
import { getMonth } from "core/utils/getMonth";
import { useEffect, useState } from "react";

interface IArgs {
    type: TFetchEventsType;
    name: string;
}

export const useEvents = (args: IArgs) => {
    const [events, setEvents] = useState<ISchedule[]>([]);
    const { firstDay, lastDay } = getMonth();

    useEffect(() => {
        const fetcher = async () => {
            const events = await fetchEvents(args);

            setEvents(events);
        };

        fetcher();
    }, [events, args, firstDay, lastDay]);

    return { events };
};
