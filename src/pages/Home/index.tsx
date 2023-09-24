import MainLayout from "pages/layout/MainLayout";

import * as S from "./Home.styles";

import { Button } from "components/ui/Button";

import AddIcon from "@mui/icons-material/Add";
import { Calendar } from "components/ui/Calendar/Calendar";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <S.HomeContainer>
                <Calendar />
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
