import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as S from "./Checkbox.styles";
import { ElementRef, forwardRef } from "react";
import { Check } from "@mui/icons-material";

export const Checkbox = forwardRef<
    ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxPrimitive.CheckboxProps
>(({ ...props }, ref) => {
    return (
        <S.StyledCheckboxContainer>
            <S.StyledCheckbox ref={ref} className="Checkbox" {...props}>
                <CheckboxPrimitive.Indicator>
                    <Check />
                </CheckboxPrimitive.Indicator>
            </S.StyledCheckbox>
        </S.StyledCheckboxContainer>
    );
});

Checkbox.displayName = "Checkbox";
