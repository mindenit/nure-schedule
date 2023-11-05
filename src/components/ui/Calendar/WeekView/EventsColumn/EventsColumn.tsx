import { TDayWithEvents } from "@onetools/calendar";
import { TIMELINE } from "core/constants";
import { IEvent, TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC } from "react";
import { EventCell } from "../EventCell/EventCell";
import * as S from "./EventsColumn.styles";

interface EventColumnProps extends ComponentPropsWithoutRef<"div"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

const getEvents = (events: IEvent[], startTime: string) => {
    return events.filter((event) => {
        return event.startTime === startTime;
    });
};

export const EventsColumn: FC<EventColumnProps> = ({ day, ...props }) => {
    return (
        <S.StyledEventsColumn {...props}>
            {TIMELINE.map((item) => {
                const events = getEvents(day.events, item);

                return <EventCell key={item} time={item} events={events} />;
            })}
        </S.StyledEventsColumn>
    );
};
