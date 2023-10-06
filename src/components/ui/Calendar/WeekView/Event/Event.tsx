import { IEvent } from "core/types/events.types";
import { SubjectType } from "core/types/ui.types";
import { ComponentPropsWithoutRef, FC } from "react";
import * as C from "styles/components";
import * as S from "./Event.styles";
import { Dialog } from "components/ui/Dialog";
import { getSubjectType } from "core/utils/getSubjectType";

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
    const subjectType = getSubjectType(event.type as SubjectType);

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
                <Dialog.Header title={`${event.startTime}; ${subjectType}`} />
                <C.TitleBig>{event.subject.title}</C.TitleBig>
                <C.TitleMedium>Авдиторія: {event.auditorium}</C.TitleMedium>
                <S.StyledDialogContainer>
                    <C.TitleMedium>Викладач:</C.TitleMedium>
                    {event.teachers.map((teacher, index) => (
                        <C.TitleMedium key={index}>
                            {teacher.fullName}
                        </C.TitleMedium>
                    ))}
                </S.StyledDialogContainer>
                <S.StyledDialogContainer>
                    <C.TitleMedium>Групи:</C.TitleMedium>
                    {event.groups.map((group, index) => (
                        <C.TitleMedium key={index}>{group.name}</C.TitleMedium>
                    ))}
                </S.StyledDialogContainer>
            </Dialog.Content>
        </Dialog.Root>
    );
};
