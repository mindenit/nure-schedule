import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Avatar.styles";
import * as C from "../Navbar.styles";

interface NavbarAvatarProps extends ComponentPropsWithoutRef<"img"> {
  badgeCount?: number
}

export const NavbarAvatar = forwardRef<ElementRef<"img">, NavbarAvatarProps>(({ ...props }, ref) => {
  return (
    <C.StyledNavbarContainer className="Container">
      <S.StyledNavbarAvatar ref={ref} {...props} />
    </C.StyledNavbarContainer>
  )
})
