import { ISchedule } from "@nurejs/api";
import { TDayWithEvents } from "@onetools/calendar";
import { ComponentPropsWithoutRef, FC } from "react";
import { WeekHeader } from "./Header/Header";
import { EventsColumn } from "./EventsColumn/EventsColumn";
import { CalendarTimeline } from "./Timeline/Timeline";
import * as S from "./WeekView.styles";

interface CalendarWeekViewProps extends ComponentPropsWithoutRef<"section"> {
    days: TDayWithEvents<ISchedule>[];
}

export const CalendarWeekView: FC<CalendarWeekViewProps> = ({
    days,
    ...props
}) => {
    return (
        <S.StyledWeekView {...props}>
            <CalendarTimeline />
            <S.StyledWrapper>
                <S.StyledContainer>
                    {days.map((day) => (
                        <WeekHeader key={`${day.day} ${day.month}`} day={day} />
                    ))}
                </S.StyledContainer>
                <S.StyledContainer>
                    {days.map((day) => (
                        <EventsColumn
                            key={`${day.day} ${day.month}`}
                            day={day}
                        />
                    ))}
                </S.StyledContainer>
            </S.StyledWrapper>
        </S.StyledWeekView>
    );
};
