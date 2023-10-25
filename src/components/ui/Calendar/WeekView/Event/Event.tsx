import { IEvent } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./Event.styles";
import { Card } from "components/ui/Card";
import { Dialog } from "components/ui/Dialog";
import { getSubjectType } from "core/utils/getSubjectType";
import { adaptTeacher } from "core/types/data.types";

type EventVariant = "pratical" | "labaratory" | "lection";

type EventType = "compact" | "default";

interface EventProps extends ComponentPropsWithoutRef<"div"> {
    event: IEvent;
    type: EventType;
}

const getEventVariant = (brief: SubjectType): EventVariant => {
    switch (brief) {
        case "Лб":
            return "labaratory";
        case "Лк":
            return "lection";
        case "Пз":
            return "pratical";
    }
};

export const Event: FC<EventProps> = ({ event, type, ...props }) => {
    const variant = getEventVariant(event.type as SubjectType);

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <S.StyledEvents data-variant={variant} {...props}>
                    <S.StyledEventText>{event.subject.brief}</S.StyledEventText>
                    <S.StyledEventText>{event.type}</S.StyledEventText>
                    {type === "default" && (
                        <S.StyledEventText>
                            {event.startTime}-{event.endTime}
                        </S.StyledEventText>
                    )}
                </S.StyledEvents>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header title="Розклад" />
                <Card
                    cardType="subjectText"
                    id={String(event.id + event.id)}
                    startTime={event.startTime}
                    subjectType={getSubjectType(event.type as SubjectType)}
                    subjectName={event.subject.title}
                    auditory={event.auditorium}
                    teacher={event.teachers.map(adaptTeacher)}
                    groups={event.groups}
                />
            </Dialog.Content>
        </Dialog.Root>
    );
};
