import { ComponentPropsWithoutRef, FC, memo } from "react";
import * as S from "./Timeline.styles";
import { TIMELINE } from "core/constants";

interface CalendarTimelineProps extends ComponentPropsWithoutRef<"header"> {}

export const CalendarTimeline: FC<CalendarTimelineProps> = memo((props) => {
    return (
        <S.StyledTimeline {...props}>
            {TIMELINE.map((item) => (
                <S.StyledTimelineItem key={item}>{item}</S.StyledTimelineItem>
            ))}
        </S.StyledTimeline>
    );
});
