import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Icon.styles";

interface NavbarIconProps extends ComponentPropsWithoutRef<"div"> {
  badgeCount?: number
}

const NavbarIcon = forwardRef<ElementRef<"div">, NavbarIconProps>(({ badgeCount, children, ...props }, ref) => {
  return (
    <S.NavbarIcon ref={ref} className="Container" {...props}>
      {badgeCount && (
        <span className="IconBadge" aria-hidden={true}>
          {badgeCount}
        </span>
      )}
      {children}
    </S.NavbarIcon>
  )
})

export default NavbarIcon;
