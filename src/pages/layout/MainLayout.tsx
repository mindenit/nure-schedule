import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { media } from "styles/media";
import * as S from "./MainLayout.styles";

import { Logo } from "components/ui/Logo";
import { Navbar } from "components/Navbar/Navbar";

import pagesData from "pages/pagesData";
import { LOCAL_KEYS } from "core/constants";
import { Button } from "components/ui/Button";
import { Login, Logout } from "@mui/icons-material";
import { useLogout } from "core/hooks/useLogout";

interface Props {
    logoText?: string | undefined;
    children: React.ReactNode | React.ReactNode[];
}

const MainLayout: React.FC<Props> = ({ logoText, children }) => {
    const { logout, isLoading } = useLogout();
    const location = useLocation();
    const isMobile = useMediaQuery({
        query: media.medium,
    });
    const navbarPages = pagesData.filter((page) => page.showInNavbar);

    useEffect(() => {
        const currentPage = pagesData.find(
            (page) => page.path === location.pathname
        );

        if (currentPage && currentPage.title) {
            document.title = `${currentPage.title} | Nure Schedule`;
        }
    }, [location.pathname]);

    return (
        <S.MainLayoutContainer>
            {isMobile ? (
                <>
                    <S.MainLayoutHeader>
                        {logoText !== undefined && <Logo text={logoText} />}
                    </S.MainLayoutHeader>
                    <S.MainLayoutContent>{children}</S.MainLayoutContent>
                    <S.MainLayoutFooter>
                        <Navbar.Root>
                            {navbarPages.map((page, index) => (
                                <Navbar.Item
                                    key={index}
                                    to={page.path}
                                    isActive={page.path === location.pathname}
                                >
                                    <Navbar.Icon>
                                        {page.navbarItem?.icon}
                                    </Navbar.Icon>
                                    {page.navbarItem?.label}
                                </Navbar.Item>
                            ))}
                            <Navbar.Item
                                to={"/account"}
                                isActive={location.pathname === "/account"}
                            >
                                <Navbar.Avatar src="https://i.pravatar.cc/80" />
                                Аккаунт
                            </Navbar.Item>
                        </Navbar.Root>
                    </S.MainLayoutFooter>
                </>
            ) : (
                <>
                    <S.MainLayoutDesktopHeader>
                        <S.MainLayoutDesktopContainer>
                            {logoText !== undefined && <Logo text={logoText} />}
                            <S.StyledNavbarContainer>
                                <Navbar.Root>
                                    {navbarPages.map((page, index) => (
                                        <Navbar.Item
                                            key={index}
                                            to={page.path}
                                            isActive={
                                                page.path === location.pathname
                                            }
                                        >
                                            <Navbar.Icon>
                                                {page.navbarItem?.icon}
                                            </Navbar.Icon>
                                            {page.navbarItem?.label}
                                        </Navbar.Item>
                                    ))}
                                </Navbar.Root>
                                {!localStorage.getItem(
                                    LOCAL_KEYS.AUTH_TOKENS
                                ) ? (
                                    <Link to="/signin">
                                        <Button>
                                            <Login />
                                            Увійти в аккаунт
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        onClick={logout}
                                        disabled={isLoading}
                                    >
                                        <Logout />
                                        Вийти
                                    </Button>
                                )}
                            </S.StyledNavbarContainer>
                        </S.MainLayoutDesktopContainer>
                    </S.MainLayoutDesktopHeader>
                    <S.MainLayoutContent>{children}</S.MainLayoutContent>
                </>
            )}
        </S.MainLayoutContainer>
    );
};

export default MainLayout;
