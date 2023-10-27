import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Item.styles";

interface NavigationDrawerItemProps extends ComponentPropsWithoutRef<"div"> {}

export const NavigationDrawerItem = forwardRef<
    ElementRef<"div">,
    NavigationDrawerItemProps
>(({ ...props }, ref) => {
    return <S.StyledItem ref={ref} {...props} />;
});

NavigationDrawerItem.displayName = "NavigationDrawerItem";
