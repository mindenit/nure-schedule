import * as S from "./SearchField.styles";

interface Props {
    value: string | number;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<Props> = ({
    value,
    name,
    placeholder,
    onChange,
}) => {
    return (
        <>
            <S.StyledInputContainer>
                <S.StyledSearchField
                    type="text"
                    id={name}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <S.SearchIcon />
            </S.StyledInputContainer>
        </>
    );
};

export { SearchField };
