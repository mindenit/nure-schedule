import MainLayout from "pages/layout/MainLayout";

import * as S from "./Home.styles";

import * as C from "styles/components";
import { Button } from "components/ui/Button";

import AddIcon from "@mui/icons-material/Add";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <S.HomeContainer>
                <S.HomeEmoji />
                <S.HomeTitle>У вас поки немає розкладів</S.HomeTitle>
                <C.TitleMedium>Додайте розклади</C.TitleMedium>
                <S.HomeButtonContainer>
                    <Button>
                        <AddIcon />
                        Додати розклад
                    </Button>
                </S.HomeButtonContainer>
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
