import { IDayWithEvents } from "@onetools/calendar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Header.styles";

interface CalendarHeaderProps extends ComponentPropsWithoutRef<"span"> {
  day: IDayWithEvents
}

export const WeekHeader = forwardRef<
  ElementRef<"span">,
  CalendarHeaderProps
>(({ day, ...props }, ref) => {
  return (
    <S.StyledWeekHeader ref={ref} data-active={day.isCurrentDay} {...props}>
      <div className="Badge">
        {day.day}.{day.month}
      </div>
    </S.StyledWeekHeader>
  )
});

WeekHeader.displayName = "WeekHeader"
