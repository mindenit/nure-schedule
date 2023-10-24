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
    }, [formatter, locale, timezone, events]);

    const defaultDays = calendarCore.changeEvents(events, defaultView);

    const [activeView, setView] = useState<TView>(defaultView);
    const [days, setDays] = useState<TDayWithEvents<T>[]>(defaultDays);

    useEffect(() => {
        setDays(calendarCore.changeEvents(events, activeView));
        console.log(1);
    }, [...events]);

    const getMonth = () => {
        const monthDays = calendarCore.months.getMonth(events);

        setDays(monthDays);
        setView("month");
    };

    const getWeek = () => {
        const weekDays = calendarCore.weeks.getWeek(events);

        setDays(weekDays);
        setView("week");
    };

    const getDay = () => {
        const day = calendarCore.days.getDay(events);

        setDays(day);
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
