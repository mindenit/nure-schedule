import * as S from "./Logo.styles";
import Logotype from "assets/Logo";

interface Props {
    text: string;
}

export const Logo: React.FC<Props> = ({ text }) => {
    return (
        <S.StyledLogoContainer>
            <Logotype />
            <S.StyledLogoText>{text}</S.StyledLogoText>
        </S.StyledLogoContainer>
    );
};
