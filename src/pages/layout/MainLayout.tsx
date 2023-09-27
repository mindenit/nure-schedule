import * as S from "./MainLayout.styles";

import { Logo } from "components/ui/Logo";

import { Navbar } from "components/Navbar/Navbar";

import pagesData from "pages/pagesData";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const navbarPages = pagesData.filter((page) => page.showInNavbar);

    return (
        <S.MainLayoutContainer>
            <S.MainLayoutHeader>
                <Logo text="Розклад" />
            </S.MainLayoutHeader>
            <S.MainLayoutContent>{children}</S.MainLayoutContent>
            <S.MainLayoutFooter>
                <Navbar.Root>
                    {navbarPages.map((page, index) => (
                        <Navbar.Item key={index} to={page.path}>
                            <Navbar.Icon>{page.navbarItem?.icon}</Navbar.Icon>
                            {page.navbarItem?.label}
                        </Navbar.Item>
                    ))}
                    <Navbar.Item to={"/"}>
                        <Navbar.Avatar src="https://i.pravatar.cc/80" />
                        User
                    </Navbar.Item>
                </Navbar.Root>
            </S.MainLayoutFooter>
        </S.MainLayoutContainer>
    );
};

export default MainLayout;
