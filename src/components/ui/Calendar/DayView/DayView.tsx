import { TDayWithEvents } from "@onetools/calendar";
import { TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./DayView.style";
import { EventsList } from "./EventsList/EventsList";

interface DayViewProps extends ComponentPropsWithoutRef<"section"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const CalendarDayView: FC<DayViewProps> = ({ day, ...props }) => {
    const heading = `${day.day}.${day.month}, ${day.weekday}`;

    return (
        <S.StyledDayView {...props}>
            <h1>{heading}</h1>
            <EventsList events={day.events} day={day} />
        </S.StyledDayView>
    );
};
