/*
 * All the code that is written and commented out below
 * is code that shows the principle of changing themes.
 */

import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";

import { ImportContacts } from "@mui/icons-material";
import NavbarIcon from "component/Navbar/Icon/Icon";
import NavbarItem from "component/Navbar/Item/Item";
import Navbar from "component/Navbar/Navbar";
import type { RootState } from "core/store/store";
import NavbarAvatar from "component/Navbar/Avatar/Avatar";
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
