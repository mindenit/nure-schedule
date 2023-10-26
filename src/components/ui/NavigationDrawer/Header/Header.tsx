import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Header.styles";

interface ListHeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const ListHeader = forwardRef<ElementRef<"div">, ListHeaderProps>(({ children, ...props }, ref) => {
  return (
    <S.StyledListHeader ref={ref} {...props}>
      <span className="Dot" aria-hidden />
      {children}
    </S.StyledListHeader>
  )
});

ListHeader.displayName = "ListHeader";
