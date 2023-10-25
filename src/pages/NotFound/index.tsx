import MainLayout from "pages/layout/MainLayout";

import * as S from "./NotFound.styles";
import * as C from "styles/components";

const NotFound: React.FC = () => {
    return (
        <MainLayout logoText="404">
            <S.NotFoundContainer>
                <C.TitleLarge>Сторінка не знайдена</C.TitleLarge>
            </S.NotFoundContainer>
        </MainLayout>
    );
};

export default NotFound;
