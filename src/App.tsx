import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";
import * as C from "styles/components";

import type { RootState } from "core/store/store";

import { Card } from "components/ui/Card";
import { ImportContacts } from "@mui/icons-material";
import { Navbar } from "components/Navbar/Navbar";
import { Tabs } from "components/ui/Tabs";
import { Dialog } from "components/ui/Dialog";

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
                        <p>1212</p>
                    </Dialog.Content>
                </Dialog.Root>
            </Navbar.Root>
            <Tabs.Root defaultValue="day">
                <Tabs.List>
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
