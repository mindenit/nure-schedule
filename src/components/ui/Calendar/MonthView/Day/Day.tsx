import {
    ComponentPropsWithoutRef,
    ElementRef,
    Fragment,
    forwardRef,
    useState,
} from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { TDayWithEvents } from "@onetools/calendar";
import { Dialog } from "components/ui/Dialog";
import { MobileDayModal } from "components/ui/MobileDayModal";
import { TModifiedSchedule } from "core/types/events.types";
import * as S from "./Day.styles";
import * as C from "styles/components";
import { media } from "styles/media";
import { SubjectType } from "core/types/ui.types";
import { Card } from "components/ui/Card";
import { formatMonth } from "core/utils/formatMonth";
import type { RootState } from "core/store/store";
import { getSubjectType } from "core/utils/getSubjectType";
import { ICommonData, adaptTeacher } from "core/types/data.types";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

interface CalendarDayProps extends ComponentPropsWithoutRef<"div"> {
    day: TDayWithEvents<TModifiedSchedule>;
}

export const CalendarDay = forwardRef<ElementRef<"div">, CalendarDayProps>(
    ({ day, ...props }, ref) => {
        const [clickedCardId, setClickedCardId] = useState<number | null>(null);
        const [showDialog, setShowDialog] = useState(false);
        const { activeItem } = useSelector((state: RootState) => state.data);
        console.log(`clicked id: ${clickedCardId}`);

        const handleClick = (id: number) => {
            if (clickedCardId === 0 || clickedCardId === null)
                setClickedCardId(id);
            else setClickedCardId(0);
        };

        const isMobile = useMediaQuery({
            query: media.medium,
        });

        if (day.events.length > 0) {
            if (isMobile) {
                return (
                    <>
                        <S.StyledDayCell
                            ref={ref}
                            data-current={day.isCurrentMonth}
                            {...props}
                            onClick={() => setShowDialog(true)}
                        >
                            <S.StyledDayCircle data-current={day.isCurrentDay}>
                                {day.day}
                            </S.StyledDayCircle>
                            <S.StyledSubjectsIndicator>
                                {day.events.length}
                            </S.StyledSubjectsIndicator>
                        </S.StyledDayCell>
                        {showDialog && (
                            <MobileDayModal
                                groups={activeItem as ICommonData}
                                dayAndMonth={formatMonth(day.day, day.month)}
                                onCloseClick={() => setShowDialog(false)}
                            >
                                {day.events.map((event) => (
                                    <Dialog.Root key={event.id}>
                                        <Dialog.Trigger>
                                            <C.FullWidthContainer
                                                onClick={() =>
                                                    handleClick(event.id)
                                                }
                                            >
                                                <Card
                                                    cardType="subject"
                                                    key={event.id}
                                                    id={String(event.id)}
                                                    isFullWidth
                                                    startTime={event.startTime}
                                                    endTime={event.endTime}
                                                    auditory={event.auditory}
                                                    type={
                                                        event.type as SubjectType
                                                    }
                                                    subjectBrief={
                                                        event.subject.brief
                                                    }
                                                    subjectName={
                                                        event.subject.brief
                                                    }
                                                />
                                            </C.FullWidthContainer>
                                        </Dialog.Trigger>
                                        <Dialog.Content>
                                            <Dialog.Header
                                                title={`${day.day}.${day.month}.${day.year}`}
                                            />
                                            <Card
                                                cardType="subjectText"
                                                id={String(event.id + event.id)}
                                                weekday={day.weekday}
                                                date={`${day.day}.${day.month}.${day.year}`}
                                                startTime={event.startTime}
                                                endTime={event.endTime}
                                                subjectType={getSubjectType(
                                                    event.type as SubjectType
                                                )}
                                                subjectName={
                                                    event.subject.title
                                                }
                                                auditory={event.auditory}
                                                teacher={event.teachers.map(
                                                    adaptTeacher
                                                )}
                                                groups={event.groups}
                                            />
                                        </Dialog.Content>
                                    </Dialog.Root>
                                ))}
                            </MobileDayModal>
                        )}
                    </>
                );
            } else {
                return (
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <S.StyledDayCell
                                ref={ref}
                                data-current={day.isCurrentMonth}
                                {...props}
                            >
                                <S.StyledDayCircle
                                    data-current={day.isCurrentDay}
                                >
                                    {day.day}
                                </S.StyledDayCircle>
                                <S.StyledSubjectsIndicator>
                                    {day.events.length}
                                </S.StyledSubjectsIndicator>
                            </S.StyledDayCell>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header title="Розклад" />
                            <C.TitleMedium>
                                Група {activeItem!.name}
                            </C.TitleMedium>
                            <C.TitleLarge>
                                {formatMonth(day.day, day.month)}
                            </C.TitleLarge>
                            {day.events.map((event, index) => (
                                <Fragment key={index}>
                                    <C.FullWidthContainer
                                        onClick={() => handleClick(index)}
                                    >
                                        <Card
                                            cardType="subject"
                                            id={String(index)}
                                            isFullWidth
                                            startTime={event.startTime}
                                            endTime={event.endTime}
                                            auditory={event.auditory}
                                            type={event.type as SubjectType}
                                            subjectBrief={event.subject.brief}
                                            subjectName={event.subject.brief}
                                        />
                                    </C.FullWidthContainer>
                                    {clickedCardId === index && (
                                        <Card
                                            cardType="subjectText"
                                            id={String(index + index)}
                                            weekday={day.weekday}
                                            date={`${day.day}.${day.month}.${day.year}`}
                                            startTime={event.startTime}
                                            subjectType={getSubjectType(
                                                event.type as SubjectType
                                            )}
                                            subjectName={event.subject.title}
                                            auditory={event.auditory}
                                            teacher={event.teachers.map(
                                                adaptTeacher
                                            )}
                                            groups={event.groups}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </Dialog.Content>
                    </Dialog.Root>
                );
            }
        } else {
            if (isMobile) {
                return (
                    <>
                        <S.StyledDayCell
                            ref={ref}
                            data-current={day.isCurrentMonth}
                            {...props}
                            onClick={() => setShowDialog(true)}
                        >
                            <S.StyledDayCircle data-current={day.isCurrentDay}>
                                {day.day}
                            </S.StyledDayCircle>
                        </S.StyledDayCell>
                        {showDialog && isMobile && (
                            <MobileDayModal
                                groups={activeItem as ICommonData}
                                dayAndMonth={formatMonth(day.day, day.month)}
                                onCloseClick={() => setShowDialog(false)}
                                isEmpty={true}
                            ></MobileDayModal>
                        )}
                    </>
                );
            } else {
                return (
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <S.StyledDayCell
                                ref={ref}
                                data-current={day.isCurrentMonth}
                                {...props}
                            >
                                <S.StyledDayCircle
                                    data-current={day.isCurrentDay}
                                >
                                    {day.day}
                                </S.StyledDayCircle>
                            </S.StyledDayCell>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header title="Розклад" />
                            <C.TitleMedium>
                                Група {activeItem!.name}
                            </C.TitleMedium>
                            <C.TitleLarge>
                                {formatMonth(day.day, day.month)}
                            </C.TitleLarge>
                            <S.InlineFlex>
                                <EmojiEmotionsIcon />
                                <C.TitleBig>Сьогодні пар немає</C.TitleBig>
                            </S.InlineFlex>
                        </Dialog.Content>
                    </Dialog.Root>
                );
            }
        }
    }
);

CalendarDay.displayName = "CalendarDay";
