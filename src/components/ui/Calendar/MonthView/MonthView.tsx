import { TDayWithEvents } from "@onetools/calendar";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import { CalendarDay } from "./Day/Day";
import { CalendarHeader } from "./Header/Header";
import * as S from "./MonthView.styles";
import { TModifiedSchedule } from "core/types/events.types";

interface CalendarMonthViewProps extends ComponentPropsWithoutRef<"section"> {
    days: TDayWithEvents<TModifiedSchedule>[];
    headers: string[];
}

const Component: FC<CalendarMonthViewProps> = memo(
    ({ days, headers, ...props }) => {
        return (
            <S.StyledMonthView {...props}>
                <S.StyledHeadersRoot>
                    {headers.map((header) => (
                        <CalendarHeader key={header}>{header}</CalendarHeader>
                    ))}
                </S.StyledHeadersRoot>
                <S.StyledDaysRoot {...props}>
                    {days.map((day) => (
                        <CalendarDay
                            key={`${day.day} ${day.month} ${day.year}`}
                            day={day}
                        />
                    ))}
                </S.StyledDaysRoot>
            </S.StyledMonthView>
        );
    }
);

export const CalendarMonthView = memo(Component);
