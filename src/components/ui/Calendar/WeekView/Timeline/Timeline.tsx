import { ComponentPropsWithoutRef, FC } from "react";
import * as S from "./Timeline.styles";
import { TIMELINE } from "core/constants";

interface CalendarTimelineProps extends ComponentPropsWithoutRef<"header"> {}

export const CalendarTimeline: FC<CalendarTimelineProps> = (props) => {
    return (
        <S.StyledTimeline {...props}>
            {TIMELINE.map((item) => (
                <S.StyledTimelineItem key={item}>{item}</S.StyledTimelineItem>
            ))}
        </S.StyledTimeline>
    );
};
