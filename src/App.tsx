import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";
import * as C from "styles/components";

import type { RootState } from "core/store/store";

import { Card } from "components/ui/Card";
import Navbar from "components/Navbar/Navbar";
import NavbarItem from "components/Navbar/Item/Item";
import NavbarIcon from "components/Navbar/Icon/Icon";
import NavbarAvatar from "components/Navbar/Avatar/Avatar";
import { ImportContacts } from "@mui/icons-material";

// TODO: Fix bug in NavBar, when you can select 2 active elements

const App: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <C.Container>
                <Card avatar="ПР">
                    <C.TitleMedium>
                        <b>11:15</b> Практичне заняття
                    </C.TitleMedium>
                    <C.TitleBig>Фізичне виховання</C.TitleBig>
                </Card>
                <Card avatar="">
                    <C.TitleMedium>
                        <b>11:15</b> Практичне заняття
                    </C.TitleMedium>
                    <C.TitleBig>Фізичне виховання</C.TitleBig>
                </Card>
            </C.Container>
            <Navbar>
                <NavbarItem isActive={true}>
                    <NavbarIcon badgeCount={4}>
                        <ImportContacts />
                    </NavbarIcon>
                    Label
                </NavbarItem>
                <NavbarItem>
                    <NavbarIcon>
                        <ImportContacts />
                    </NavbarIcon>
                    Label
                </NavbarItem>
                <NavbarItem>
                    <NavbarIcon>
                        <ImportContacts />
                    </NavbarIcon>
                    Label
                </NavbarItem>
                <NavbarItem>
                    <NavbarIcon>
                        <ImportContacts />
                    </NavbarIcon>
                    Label
                </NavbarItem>
                <NavbarItem>
                    <NavbarAvatar src="https://i.pravatar.cc/80" />
                    User
                </NavbarItem>
            </Navbar>
        </ThemeProvider>
    );
};

export default App;
