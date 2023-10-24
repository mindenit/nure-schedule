import { TEvent, TDayWithEvents } from "@onetools/calendar";
import { Card } from "components/ui/Card";
import { TModifiedSchedule } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./EventsList.style";
import { Dialog } from "components/ui/Dialog";
import { getSubjectType } from "core/utils/getSubjectType";
import { adaptTeacher } from "core/types/data.types";

interface EventsListProps extends ComponentPropsWithoutRef<"div"> {
    events: TEvent<TModifiedSchedule>[];
    day: TDayWithEvents<TModifiedSchedule>;
}

export const EventsList: FC<EventsListProps> = ({ events, day, ...props }) => {
    return (
        <S.StyledEventsList {...props}>
            <>
                {events.length > 0 ? (
                    events
                        .slice(0)
                        .reverse()
                        .map((event) => (
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <div>
                                        <Card
                                            key={event.id}
                                            id={String(event.id)}
                                            cardType="subject"
                                            startTime={event.startTime}
                                            type={event.type as SubjectType}
                                            auditory={event.auditorium}
                                            subjectBrief={event.subject.brief}
                                            subjectName={event.subject.brief}
                                        />
                                    </div>
                                </Dialog.Trigger>
                                <Dialog.Content>
                                    <Dialog.Header title="Розклад" />
                                    <Card
                                        cardType="subjectText"
                                        id={String(event.id + event.id)}
                                        weekday={day.weekday}
                                        date={`${day.day}.${day.month}.${day.year}`}
                                        startTime={event.startTime}
                                        subjectType={getSubjectType(
                                            event.type as SubjectType
                                        )}
                                        subjectName={event.subject.title}
                                        auditory={event.auditorium}
                                        teacher={event.teachers.map(
                                            adaptTeacher
                                        )}
                                        groups={event.groups}
                                    />
                                </Dialog.Content>
                            </Dialog.Root>
                        ))
                ) : (
                    <S.StyledEmptyList>
                        <S.StyledEmoji />
                        <S.StyledTitle>
                            Схоже, що сьогодні пар немає
                        </S.StyledTitle>
                    </S.StyledEmptyList>
                )}
            </>
        </S.StyledEventsList>
    );
};
