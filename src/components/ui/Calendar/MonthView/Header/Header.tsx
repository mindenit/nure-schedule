import { ComponentPropsWithoutRef, ElementRef, forwardRef, memo } from "react";
import * as S from "./Header.styles";

interface CalendarHeaderProps extends ComponentPropsWithoutRef<"span"> {}

export const CalendarHeader = memo(
    forwardRef<ElementRef<"span">, CalendarHeaderProps>(({ ...props }, ref) => {
        return <S.StyledHeader ref={ref} {...props} />;
    })
);

CalendarHeader.displayName = "CalendarHeader";
