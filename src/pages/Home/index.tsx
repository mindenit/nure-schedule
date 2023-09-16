import MainLayout from "pages/layout/MainLayout";

import * as C from "styles/components";
import * as S from "./Home.styles";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <S.HomeContainer>
                <S.HomeEmoji />
                <S.HomeTitle>У вас поки немає розкладів</S.HomeTitle>
                <C.TitleMedium>Додайте розклади</C.TitleMedium>
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
