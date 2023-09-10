import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    input, textarea, button, select {
        font: inherit
    }

    body {
        min-height: 100vh;

        font-family: "Roboto", sans-serif;
        font-size: 14px;

        background-color: ${({ theme }) => theme.colors.appBackground};
    }
`;

export default GlobalStyles;
