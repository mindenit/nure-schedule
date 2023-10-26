import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Item.styles";

interface ListItemProps extends ComponentPropsWithoutRef<"div"> {}

export const ListItem = forwardRef<ElementRef<"div">, ListItemProps>(
    ({ ...props }, ref) => {
        return <S.StyledItem ref={ref} {...props} />;
    }
);

ListItem.displayName = "ListItem";
