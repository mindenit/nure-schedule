import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Header.styles";

interface CalendarHeaderProps extends ComponentPropsWithoutRef<"span"> {}

export const CalendarHeader = forwardRef<
    ElementRef<"span">,
    CalendarHeaderProps
>(({ ...props }, ref) => {
    return <S.StyledHeader ref={ref} {...props} />;
});

CalendarHeader.displayName = "CalendarHeader";
