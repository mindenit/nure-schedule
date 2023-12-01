import { TDayWithEvents } from "@onetools/calendar";
import { TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC, memo, useMemo } from "react";
import * as S from "./DayView.style";
import * as C from "styles/components";
import { EventsList } from "./EventsList/EventsList";
import { formatMonth } from "core/utils/formatMonth";

interface DayViewProps extends ComponentPropsWithoutRef<"section"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const Component: FC<DayViewProps> = ({ day, ...props }) => {
    const heading = useMemo(() => {
        return formatMonth(day.day, day.month);
    }, [day]);

    return (
        <S.StyledDayView {...props}>
            <C.TitleLarge>{heading}</C.TitleLarge>
            <EventsList events={day.events} day={day} />
        </S.StyledDayView>
    );
};

export const CalendarDayView = memo(Component);
CalendarDayView.displayName = "CalendarDayView";
