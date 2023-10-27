import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Action.styles";

interface NavigationDrawerActionProps
    extends ComponentPropsWithoutRef<"button"> {}

export const NavigationDrawerAction = forwardRef<
    ElementRef<"button">,
    NavigationDrawerActionProps
>(({ ...props }, ref) => {
    return <S.StyledListAction ref={ref} {...props} />;
});

NavigationDrawerAction.displayName = "NavigationDrawerAction";
