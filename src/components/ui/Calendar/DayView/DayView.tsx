import { TDayWithEvents } from "@onetools/calendar";
import { TModifiedSchedule } from "core/types/events.types";
import { formatMonth } from "core/utils/formatMonth";
import { ComponentPropsWithoutRef, FC } from "react";
import * as C from "styles/components";
import * as S from "./DayView.style";
import { EventsList } from "./EventsList/EventsList";

interface DayViewProps extends ComponentPropsWithoutRef<"section"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const CalendarDayView: FC<DayViewProps> = ({ day, ...props }) => {
    const heading = formatMonth(day.day, day.month);

    return (
        <S.StyledDayView {...props}>
            <C.TitleLarge>{heading}</C.TitleLarge>
            <EventsList events={day.events} day={day} />
        </S.StyledDayView>
    );
};

CalendarDayView.displayName = "CalendarDayView";
