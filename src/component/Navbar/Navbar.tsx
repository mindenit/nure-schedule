import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as S from "./Navbar.styles";

interface NavbarProps extends ComponentPropsWithoutRef<"header"> {}

const Navbar = forwardRef<ElementRef<"header">, NavbarProps>(({ children, ...props }, ref) => {
  return (
    <S.NavbarStyles ref={ref} {...props}>
      {children}
    </S.NavbarStyles>
  )
})

export default Navbar;
