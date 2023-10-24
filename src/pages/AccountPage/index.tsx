import { LOCAL_KEYS } from "core/constants";
import MainLayout from "pages/layout/MainLayout";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./AccountPage.styles";
import { Button } from "components/ui/Button";
import { Logout } from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/media";
import { useLogout } from "core/hooks/useLogout";

export const AccountPage: FC = () => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery({
        query: media.large,
    });
    const { logout, isLoading } = useLogout();

    useEffect(() => {
        if (!localStorage.getItem(LOCAL_KEYS.AUTH_TOKENS)) navigate("/signin");
        if (isDesktop) navigate("/");
    }, [navigate, isDesktop]);

    return (
        <MainLayout logoText="Аккаунт">
            <S.StyledContainer>
                <Button onClick={logout} disabled={isLoading}>
                    <Logout />
                    Вийти з аккаунту
                </Button>
            </S.StyledContainer>
        </MainLayout>
    );
};
