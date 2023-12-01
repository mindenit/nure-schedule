import { TDayWithEvents } from "@onetools/calendar";
import { TIMELINE } from "core/constants";
import { TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC, memo, useCallback } from "react";
import { EventCell } from "../EventCell/EventCell";
import * as S from "./EventsColumn.styles";

interface EventColumnProps extends ComponentPropsWithoutRef<"div"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const EventsColumn: FC<EventColumnProps> = memo(({ day, ...props }) => {
    const getEvents = useCallback(
        (startTime: string) => {
            return day.events.filter((event) => {
                return event.startTime === startTime;
            });
        },
        [day]
    );

    return (
        <S.StyledEventsColumn {...props}>
            {TIMELINE.map((item) => {
                const events = getEvents(item);

                return <EventCell key={item} time={item} events={events} />;
            })}
        </S.StyledEventsColumn>
    );
});
