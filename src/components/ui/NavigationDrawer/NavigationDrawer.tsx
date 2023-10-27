import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./NavigationDrawer.styles";
import { NavigationDrawerItem } from "./Item/Item";
import { NavigationDrawerAction } from "./Action/Action";
import { NavigationDrawerHeader } from "./Header/Header";

interface NavigationDrawerProps extends ComponentPropsWithoutRef<"section"> {}

const NavigationDrawerRoot = forwardRef<
    ElementRef<"section">,
    NavigationDrawerProps
>(({ ...props }, ref) => {
    return <S.StyledList ref={ref} {...props} />;
});

NavigationDrawerRoot.displayName = "NavigationDrawerRoot";

export const NavigationDrawer = {
    ...{
        Action: NavigationDrawerAction,
        Header: NavigationDrawerHeader,
        Item: NavigationDrawerItem,
        Root: NavigationDrawerRoot,
    },
};
