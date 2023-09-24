import { TEvent } from "@onetools/calendar";
import { Card } from "components/ui/Card";
import { TModifiedSchedule } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./EventsList.style";

interface EventsListProps extends ComponentPropsWithoutRef<"div"> {
    events: TEvent<TModifiedSchedule>[];
}

export const EventsList: FC<EventsListProps> = ({ events, ...props }) => {
    return (
        <S.StyledEventsList {...props}>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <Card
                        key={index}
                        cardType="subject"
                        startTime={event.startTime}
                        type={event.type as SubjectType}
                        auditory={event.auditorium}
                        subjectBrief={event.subject.brief}
                        subjectName={event.subject.title}
                    />
                ))
            ) : (
                <S.StyledEmptyList>
                    <S.StyledEmoji />
                    <S.StyledTitle>Схоже, що сьогодні пар немає</S.StyledTitle>
                </S.StyledEmptyList>
            )}
        </S.StyledEventsList>
    );
};
