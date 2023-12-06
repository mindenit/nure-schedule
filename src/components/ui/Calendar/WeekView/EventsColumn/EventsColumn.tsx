import { TDayWithEvents } from "@onetools/calendar";
import { TIMELINE } from "core/constants";
import { TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC } from "react";
import { EventCell } from "../EventCell/EventCell";
import * as S from "./EventsColumn.styles";

interface EventColumnProps extends ComponentPropsWithoutRef<"div"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const EventsColumn: FC<EventColumnProps> = ({ day, ...props }) => {
    const getEvents = (startTime: string) => {
        return day.events.filter((event) => {
            return event.startTime === startTime;
        });
    };

    return (
        <S.StyledEventsColumn {...props}>
            {TIMELINE.map((item) => {
                const events = getEvents(item);

                return <EventCell key={item} time={item} events={events} />;
            })}
        </S.StyledEventsColumn>
    );
};
