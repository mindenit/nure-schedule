import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";
import * as C from "styles/components";

import type { RootState } from "core/store/store";
import Card from "components/Card/Card";

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
        </ThemeProvider>
    );
};

export default App;
