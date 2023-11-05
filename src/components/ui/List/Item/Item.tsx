import { Checkbox } from "components/ui/Checkbox/Checkbox";
import {
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    useId,
    useState,
} from "react";
import * as S from "./Item.styles";

interface ListItemProps extends ComponentPropsWithoutRef<"label"> {
    checked?: boolean;
    onClick: () => void;
}

export const ListItem = forwardRef<ElementRef<"label">, ListItemProps>(
    ({ checked, children, onClick, ...props }, ref) => {
        const [isChecked, setChecked] = useState(checked);
        const checkboxId = useId();

        return (
            <S.StyledListItem ref={ref} htmlFor={checkboxId} {...props}>
                {children}
                <Checkbox
                    id={checkboxId}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                        onClick();
                        setChecked(checked as boolean);
                    }}
                />
            </S.StyledListItem>
        );
    }
);

ListItem.displayName = "ListItem";
ListItem.defaultProps = {
    checked: false,
};
