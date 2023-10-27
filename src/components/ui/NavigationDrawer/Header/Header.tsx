import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Header.styles";

interface NavigationDrawerHeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const NavigationDrawerHeader = forwardRef<
    ElementRef<"div">,
    NavigationDrawerHeaderProps
>(({ children, ...props }, ref) => {
    return (
        <S.StyledListHeader ref={ref} {...props}>
            <span className="Dot" aria-hidden />
            {children}
        </S.StyledListHeader>
    );
});

NavigationDrawerHeader.displayName = "NavigationDrawerHeader";
