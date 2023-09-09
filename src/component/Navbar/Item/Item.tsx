import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Item.styles";

interface NavbarItemProps extends ComponentPropsWithoutRef<"a"> {
  isActive?: boolean;
  // icon: ReactNode;
  // badgeCount?: number
}

const NavbarItem = forwardRef<ElementRef<"a">, NavbarItemProps>(({ children, isActive, ...props }, ref) => {
  return (
    <S.LinkStyled ref={ref} data-active={isActive} {...props}>
      {/* <div className="Container">
        {badgeCount && (
          <span className="IconBadge" aria-hidden={true}>
            {badgeCount}
          </span>
        )}
        {icon}
      </div> */}
      {children}
    </S.LinkStyled>
  )
})

NavbarItem.defaultProps = {
  isActive: false
}

export default NavbarItem;
