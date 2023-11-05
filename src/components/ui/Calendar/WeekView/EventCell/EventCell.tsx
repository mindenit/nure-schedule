import { IEvent } from "core/types/events.types";
import { ComponentPropsWithoutRef, FC } from "react";
import { Event } from "../Event/Event";

interface EventCellProps extends ComponentPropsWithoutRef<"div"> {
    events: IEvent[];
    time: string;
}

export const EventCell: FC<EventCellProps> = ({ events, time, ...props }) => {
    return (
        <div className="ColumnItem" data-time={time} {...props}>
            {events.map((event) => (
                <Event
                    type={events.length > 1 ? "compact" : "default"}
                    key={event.id}
                    event={event}
                />
            ))}
        </div>
    );
};
