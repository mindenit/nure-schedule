import * as S from "./CardAvatar.styles";

interface Props {
    letters: string;
    color: string;
}

const CardAvatar: React.FC<Props> = ({ letters, color }) => {
    return (
        <S.StyledCardAvatar color={color}>
            <S.StyledCardAvatarText>{letters}</S.StyledCardAvatarText>
        </S.StyledCardAvatar>
    );
};

export { CardAvatar };
