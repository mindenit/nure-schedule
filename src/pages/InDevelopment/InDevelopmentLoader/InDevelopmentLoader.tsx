import * as S from "./InDevelopmentLoader.styles";

export const InDevelopmentLoader: React.FC = () => {
    return (
        <S.InDevLoaderCont>
            <S.InDevLoaderFinger />
            <S.InDevLoaderFinger />
            <S.InDevLoaderFinger />
            <S.InDevLoaderFinger />
            <S.InDevLoaderEl />
            <S.InDevLoaderThumb />
        </S.InDevLoaderCont>
    );
};
