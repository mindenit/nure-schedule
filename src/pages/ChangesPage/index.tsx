import { LOCAL_KEYS } from "core/constants";
import MainLayout from "pages/layout/MainLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/components";
import * as S from "./ChangesPage.styles";

export const ChangesPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS)) {
            navigate("/signin");
        }
    }, [navigate]);

    return (
        <MainLayout logoText="Зміни">
            <S.StyledContainer>
                <C.TitleLarge>Змін немає</C.TitleLarge>
            </S.StyledContainer>
        </MainLayout>
    );
};
