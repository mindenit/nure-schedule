import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Icon.styles";
import * as C from "../Navbar.styles";

interface NavbarIconProps extends ComponentPropsWithoutRef<"div"> {
    badgeCount?: number;
}

const NavbarIcon = forwardRef<ElementRef<"div">, NavbarIconProps>(
    ({ badgeCount, children, ...props }, ref) => {
        return (
            <C.StyledNavbarContainer className="Container" ref={ref} {...props}>
                {badgeCount && (
                    <S.StyledIconBadge className="IconBadge" aria-hidden={true}>
                        {badgeCount}
                    </S.StyledIconBadge>
                )}
                {children}
            </C.StyledNavbarContainer>
        );
    }
);

export default NavbarIcon;
