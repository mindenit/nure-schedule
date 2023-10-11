import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./TextField.styles";

type TextFieldType = "email" | "text" | "password" | "search";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
    type?: TextFieldType;
}

export const TextField = forwardRef<ElementRef<"input">, TextFieldProps>(
    ({ id, placeholder, ...props }, ref) => {
        return (
            <S.StyledInputContainer>
                <S.StyledInput
                    id={id}
                    ref={ref}
                    aria-labelledby="placeholder"
                    {...props}
                />
                <label id="placeholder" className="Placeholder" htmlFor={id}>
                    <div className="Text">{placeholder}</div>
                </label>
            </S.StyledInputContainer>
        );
    }
);

TextField.displayName = "TextField";

TextField.defaultProps = {
    type: "text",
};
