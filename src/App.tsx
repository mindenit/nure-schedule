import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import * as C from "styles/components";
import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";

import type { RootState } from "core/store/store";

import { ImportContacts } from "@mui/icons-material";
import { Navbar } from "components/Navbar/Navbar";

import { Card } from "components/ui/Card";
import { Dialog } from "components/ui/Dialog";
import { List } from "components/ui/List";
import { Tabs } from "components/ui/Tabs";

const App: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Navbar.Root>
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
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Navbar.Item>
                            <Navbar.Avatar src="https://i.pravatar.cc/80" />
                            User
                        </Navbar.Item>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <Dialog.Header title="sdsd" />
                        <List.Root>
                            <List.Item>
                                <List.Header>
                                    Практичні роботи
                                </List.Header>
                            </List.Item>
                        </List.Root>
                    </Dialog.Content>
                </Dialog.Root>
            </Navbar.Root>
            <Tabs.Root defaultValue="day">
                <Tabs.List variant="compact">
                    <Tabs.Trigger value="day">День</Tabs.Trigger>
                    <Tabs.Trigger value="week">Тиждень</Tabs.Trigger>
                    <Tabs.Trigger value="month">Місяць</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="day">1212</Tabs.Content>
                <Tabs.Content value="week">454554</Tabs.Content>
                <Tabs.Content value="month">weewwewe</Tabs.Content>
            </Tabs.Root>
        </ThemeProvider>
    );
};

export default App;
