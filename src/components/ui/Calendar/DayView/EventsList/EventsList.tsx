import { TDayWithEvents, TEvent } from "@onetools/calendar";
import { Card } from "components/ui/Card";
import { Dialog } from "components/ui/Dialog";
import { adaptTeacher } from "core/types/data.types";
import { TModifiedSchedule } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { getSubjectType } from "core/utils/getSubjectType";
import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./EventsList.style";

interface EventsListProps extends ComponentPropsWithoutRef<"div"> {
    events: TEvent<TModifiedSchedule>[];
    day: TDayWithEvents<TModifiedSchedule>;
}

export const EventsList: FC<EventsListProps> = ({ events, day, ...props }) => {
    return (
        <S.StyledEventsList {...props}>
            <>
                {events.length > 0 ? (
                    events.map((event) => (
                        <Dialog.Root key={event.id}>
                            <Dialog.Trigger>
                                <div>
                                    <Card
                                        key={event.id}
                                        id={String(event.id)}
                                        cardType="subject"
                                        startTime={event.startTime}
                                        endTime={event.endTime}
                                        type={event.type as SubjectType}
                                        auditory={event.auditory}
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
                                    auditory={event.auditory}
                                    teacher={event.teachers.map(adaptTeacher)}
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
