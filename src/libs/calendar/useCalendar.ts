import { useEffect, useMemo, useState } from "react";
import { CalendarCore } from "./client";
import { IFormatter, TDayWithEvents, TRawEvent, TView } from "./types";

type TArgs<T> = {
    locale: string;
    defaultView: TView;
    events: TRawEvent<T>[];
    formatter?: IFormatter;
    timezone: string;
};

export function useCalendar<T>({
    defaultView,
    locale,
    events,
    formatter,
    timezone,
}: TArgs<T>) {
    const calendarCore = useMemo(() => {
        return new CalendarCore({
            locale,
            events,
            formatter,
            timezone,
        });
    }, [events, formatter, locale, timezone]);

    const defaultDays = calendarCore.changeEvents(events, defaultView);

    const [activeView, setView] = useState<TView>(defaultView);
    const [days, setDays] = useState<TDayWithEvents<T>[]>(defaultDays);

    useEffect(() => {
        function trackChanges() {
            let innerFunction: (newValue: TRawEvent<T>[]) => void;

            return function trackChanges(newValue: TRawEvent<T>[]) {
                if (!innerFunction) {
                    innerFunction = (newValue: TRawEvent<T>[]) => {
                        setDays(
                            calendarCore.changeEvents(newValue, activeView)
                        );
                    };
                }

                innerFunction(newValue);
            };
        }

        const monitor = trackChanges();

        monitor(events);
    }, [activeView, calendarCore, events]);

    const getMonth = () => {
        const monthDays = calendarCore.months.getMonth(events);

        setDays([...monthDays]);
        setView("month");
    };

    const getWeek = () => {
        const weekDays = calendarCore.weeks.getWeek(events);

        setDays([...weekDays]);
        setView("week");
    };

    const getDay = () => {
        const day = calendarCore.days.getDay(events);

        setDays([...day]);
        setView("day");
    };

    return {
        days,
        headers: calendarCore.getHeaders(),
        activeView,
        currentDay: calendarCore.currentDay,
        currentMonth: calendarCore.currentMonth,
        currentYear: calendarCore.currentYear,
        getMonth,
        getWeek,
        getDay,
    };
}
