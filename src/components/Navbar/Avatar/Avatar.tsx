import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Avatar.styles";

interface NavbarAvatarProps extends ComponentPropsWithoutRef<"img"> {
  badgeCount?: number
}

const NavbarAvatar = forwardRef<ElementRef<"img">, NavbarAvatarProps>(({ ...props }, ref) => {
  return (
    <S.StyledAvatar className="Container">
      <img ref={ref} {...props} />
    </S.StyledAvatar>
  )
})

export default NavbarAvatar;