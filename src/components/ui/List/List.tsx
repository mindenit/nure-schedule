import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./List.styles";

export const ListRoot = forwardRef<
    ElementRef<"section">,
    ComponentPropsWithoutRef<"section">
>(({ ...props }, ref) => {
    return <S.StyledListRoot ref={ref} {...props} />;
});
