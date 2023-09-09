import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react";
import * as S from "./NavbarItem.styles";

interface NavbarItemProps extends ComponentPropsWithoutRef<"a"> {
  $isActive: boolean;
  icon: ReactNode;
  badgeCount?: number
}

const NavbarItem = forwardRef<ElementRef<"a">, NavbarItemProps>(({ children, icon, badgeCount, ...props }, ref) => {
  return (
    <S.LinkStyled ref={ref} {...props}>
      <div className="IconContainer">
        {badgeCount && (
          <span className="IconBadge" aria-hidden={true}>
            {badgeCount}
          </span>
        )}
        {icon}
      </div>
      {children}
    </S.LinkStyled>
  )
})

export default NavbarItem;
