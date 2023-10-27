import { Checkbox } from "components/ui/Checkbox/Checkbox";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import * as S from "./Item.styles";

interface ListItemProps extends ComponentPropsWithoutRef<"label"> {
    checked?: boolean;
}

export const ListItem = forwardRef<ElementRef<"label">, ListItemProps>(
    ({ checked, children, ...props }, ref) => {
        const checkboxId = useId();

        return (
            <S.StyledListItem ref={ref} htmlFor={checkboxId} {...props}>
                {children}
                <Checkbox id={checkboxId} checked={checked} />
            </S.StyledListItem>
        );
    }
);

ListItem.displayName = "ListItem";
ListItem.defaultProps = {
    checked: false,
};
