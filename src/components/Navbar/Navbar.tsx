import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as S from "./Navbar.styles";

interface NavbarProps extends ComponentPropsWithoutRef<"header"> {}

const Navbar = forwardRef<ElementRef<"header">, NavbarProps>(
    ({ children, ...props }, ref) => {
        return (
            <S.StyledNavbar ref={ref} {...props}>
                {children}
            </S.StyledNavbar>
        );
    }
);

export default Navbar;
