import * as S from "./Input.styles";

interface Props {
    type: "text" | "number" | "email" | "password" | "search";
    showLabel: boolean;
    label: string;
    value: string | number;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
    type,
    showLabel,
    label,
    value,
    name,
    placeholder,
    onChange,
}) => {
    return (
        <>
            {showLabel && (
                <S.StyledLabel htmlFor={label}>{label}</S.StyledLabel>
            )}
            <S.StyledInputContainer>
                <S.StyledInput
                    type={type}
                    id={label}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {type === "search" && <S.SearchIcon />}
            </S.StyledInputContainer>
        </>
    );
};

export { Input };
