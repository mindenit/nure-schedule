import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";
import * as C from "styles/components";

import type { RootState } from "core/store/store";

import { ImportContacts } from "@mui/icons-material";
import { Navbar } from "components/Navbar/Navbar";

const App: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <C.Container></C.Container>
            <Navbar>
                <Navbar.Item isActive={true}>
                    <Navbar.Icon badgeCount={4}>
                        <ImportContacts />
                    </Navbar.Icon>
                    Label
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Icon>
                        <ImportContacts />
                    </Navbar.Icon>
                    Label
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Icon>
                        <ImportContacts />
                    </Navbar.Icon>
                    Label
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Icon>
                        <ImportContacts />
                    </Navbar.Icon>
                    Label
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Avatar src="https://i.pravatar.cc/80" />
                    User
                </Navbar.Item>
            </Navbar>
        </ThemeProvider>
    );
};

export default App;
