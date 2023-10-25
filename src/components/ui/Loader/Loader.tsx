import * as S from "./Loader.styles";

const Loader: React.FC = () => {
    return (
        <S.StyledFullScreenLoader>
            <S.StyledSpinner />
            <S.StyledLoader />
        </S.StyledFullScreenLoader>
    );
};

export { Loader };
