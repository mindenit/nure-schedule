import { ReactNode } from "react";
import * as S from "./CardAvatar.styles";

interface Props {
    bgColor: "#625B71" | "#5086A4" | "#21005D";
    children: ReactNode;
}

const CardAvatar: React.FC<Props> = ({ bgColor, children }) => {
    return (
        <S.StyledCardAvatar bgColor={bgColor}>
            <S.StyledCardAvatarText>{children}</S.StyledCardAvatarText>
        </S.StyledCardAvatar>
    );
};

export { CardAvatar };
