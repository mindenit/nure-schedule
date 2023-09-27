import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { LinkProps } from "react-router-dom";
import * as S from "./Item.styles";

// interface NavbarItemProps extends ComponentPropsWithoutRef<"a"> {
//     isActive?: boolean;
// }

interface NavbarItemProps extends LinkProps {
    isActive?: boolean;
}

export const NavbarItem = forwardRef<ElementRef<"a">, NavbarItemProps>(
    ({ children, isActive, ...props }, ref) => {
        return (
            <S.LinkStyled ref={ref} data-active={isActive} {...props}>
                {children}
            </S.LinkStyled>
        );
    }
);

NavbarItem.defaultProps = {
    isActive: false,
};
