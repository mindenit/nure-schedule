import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";

import type { RootState } from "core/store/store";

import { BrowserRouter } from "react-router-dom";
import Router from "pages/rrouter";

const App: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
