import MainLayout from "pages/layout/MainLayout";
import * as C from "../../styles/components";
import * as S from "./ChangesPage.styles";

export const ChangesPage = () => {
    return (
        <MainLayout logoText="Зміни">
            <S.StyledContainer>
                <C.TitleLarge>Змін немає</C.TitleLarge>
            </S.StyledContainer>
        </MainLayout>
    );
};
