import { ReactNode } from "react";
import * as S from "./Card.styles";
import { CardAvatar } from "./CardAvatar/CardAvatar";

interface Props {
    avatar: string;
    children: ReactNode;
}

/*
TODO: Create normal color system for card avatars, not like now
*/

const Card: React.FC<Props> = ({ avatar, children }) => {
    return (
        <S.StyledCard>
            {avatar === "" ? (
                children
            ) : (
                <S.StyledCardGrid>
                    <CardAvatar bgColor="#21005D">{avatar}</CardAvatar>
                    <S.StyledCardText>{children}</S.StyledCardText>
                </S.StyledCardGrid>
            )}
        </S.StyledCard>
    );
};

export { Card };
