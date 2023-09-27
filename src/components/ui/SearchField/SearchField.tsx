import { ComponentPropsWithoutRef } from "react";
import * as S from "./SearchField.styles";

interface SearchFieldProps
    extends Omit<ComponentPropsWithoutRef<"input">, "type"> {}

const SearchField: React.FC<SearchFieldProps> = ({ name, ...props }) => {
    return (
        <>
            <S.StyledInputContainer>
                <S.StyledSearchField type="text" name={name} {...props} />
                <S.SearchIcon />
            </S.StyledInputContainer>
        </>
    );
};

export { SearchField };
