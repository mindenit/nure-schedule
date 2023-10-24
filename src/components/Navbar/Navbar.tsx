import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as S from "./Navbar.styles";
import { NavbarAvatar } from "./Avatar/Avatar";
import { NavbarIcon } from "./Icon/Icon";
import { NavbarItem } from "./Item/Item";

interface NavbarProps extends ComponentPropsWithoutRef<"header"> {}

const NavbarComponent = forwardRef<ElementRef<"header">, NavbarProps>(
    ({ children, ...props }, ref) => {
        return (
            <S.StyledNavbar ref={ref} {...props}>
                {children}
            </S.StyledNavbar>
        );
    }
);

export const Navbar = {
    ...{
        Root: NavbarComponent,
        Avatar: NavbarAvatar,
        Icon: NavbarIcon,
        Item: NavbarItem,
    },
};
