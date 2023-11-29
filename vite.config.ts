import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
    build: {
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react-redux",
                "redix-saga",
                "react-router-dom",
                "axios",
                "@emotion/styled",
                "styled-components",
                "polished",
                "@reduxjs/toolkit",
                "@mui/styled-engine",
                "@mui/icons-material",
                "@sentry/react",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react-redux": "ReactRedux",
                    "redux-saga": "ReduxSaga",
                    "react-router-dom": "ReactRouterDom",
                    axios: "Axios",
                    "@emotion/styled": "EmotionStyled",
                    "styled-components": "StyledComponents",
                    polished: "Polished",
                    "@reduxjs/toolkit": "ReduxjsToolkit",
                    "@mui/styled-engine": "MuiStyledEngine",
                    "@mui/icons-material": "MuiIconMaterial",
                    "@sentry/react": "SentryReact",
                },
            },
        },
    },
});
