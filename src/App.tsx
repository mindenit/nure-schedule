/*
 * All the code that is written and commented out below
 * is code that shows the principle of changing themes.
 */

import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";

import type { RootState } from "core/store/store";
// import { uiActions } from "core/store/slices/ui.slice";

// const Wrapper = styled.div`
//     width: 200px;
//     height: 200px;
//     background-color: ${({ theme }) => theme.colors.primary};
// `;

const App: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;
    // const dispatch = useDispatch();

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <h1>Hello world</h1>
            {/* <Wrapper>1</Wrapper> */}
            {/* <button onClick={() => dispatch(uiActions.toggleTheme())}>
                Change theme
            </button> */}
        </ThemeProvider>
    );
};

export default App;
