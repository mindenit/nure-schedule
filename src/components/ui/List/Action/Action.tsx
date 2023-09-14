import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Action.styles";

interface ListActionProps extends ComponentPropsWithoutRef<"button"> {}

export const ListAction = forwardRef<ElementRef<"button">, ListActionProps>(({ ...props }, ref) => {
  return <S.StyledListAction ref={ref} {...props} />
});

ListAction.displayName = "ListAction";
