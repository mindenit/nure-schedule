import { TDayWithEvents } from "@onetools/calendar";
import { Dialog } from "components/ui/Dialog";
import { TModifiedSchedule } from "core/types/events.types";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Day.styles";
import { getSubjectType } from "core/utils/getSubjectType";
import { SubjectType } from "core/types/ui.types";

interface CalendarDayProps extends ComponentPropsWithoutRef<"div"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const CalendarDay = forwardRef<ElementRef<"div">, CalendarDayProps>(
    ({ day, ...props }, ref) => {
        const headerTitle = `Пари на ${day.day}.${day.month}.${day.year} (${day.weekday})`;

        return day.events.length > 0 ? (
            <Dialog.Root>
                <Dialog.Trigger>
                    <S.StyledDayCell
                        ref={ref}
                        data-current={day.isCurrentMonth}
                        {...props}
                    >
                        <S.StyledDayCircle data-current={day.isCurrentDay}>
                            {day.day}
                        </S.StyledDayCircle>
                        <S.StyledSubjectsIndicator>
                            {day.events.length}
                        </S.StyledSubjectsIndicator>
                    </S.StyledDayCell>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header title={headerTitle} />
                    <S.StyledSubjectsList>
                        {day.events.map((event) => (
                            <S.StyledDialogContainer>
                                <S.StyledSubjectTitle>
                                    {event.subject.title} ({event.subject.brief}
                                    )
                                </S.StyledSubjectTitle>
                                <S.StyledDialogContainer>
                                    <p>
                                        <b>Тип:</b>{" "}
                                        {getSubjectType(
                                            event.type as SubjectType
                                        )}
                                    </p>
                                    <p>
                                        <b>Авдиторія:</b> {event.auditorium}
                                    </p>
                                    <S.StyledDialogContainer>
                                        <b>Викладач:</b>
                                        {event.teachers.map((teacher) => (
                                            <p>{teacher.fullName}</p>
                                        ))}
                                    </S.StyledDialogContainer>
                                </S.StyledDialogContainer>
                            </S.StyledDialogContainer>
                        ))}
                    </S.StyledSubjectsList>
                </Dialog.Content>
            </Dialog.Root>
        ) : (
            <S.StyledDayCell
                ref={ref}
                data-current={day.isCurrentMonth}
                {...props}
            >
                <S.StyledDayCircle data-current={day.isCurrentDay}>
                    {day.day}
                </S.StyledDayCircle>
            </S.StyledDayCell>
        );
    }
);

CalendarDay.displayName = "CalendarDay";