import { ITheme } from "core/interfaces/styled";

export const lightTheme: ITheme = {
    colors: {
        white: "#FFFFFF",
        textContrast: "#000000",
        text: "#1D1B20",
        textGray: "#CAC4D0",
        textDarkGray: "#808080",
        primary: "#5086A4",
        secondary: "#edf3f7",
        secondaryContainer: "#DEF3F8",
        bgError: "#B3261E",
        textError: "#fff",
        contrast: "#000",
        text: "#49454F",
        surface: "#F7FEFF",
        outline: "#CAC4D0",
    },
};

export const darkTheme: ITheme = {
    colors: {
        white: "#FFFFFF",
        textContrast: "#FFFFFF",
        text: "#FFFFFF",
        textGray: "#CAC4D0",
        textDarkGray: "#808080",
        primary: "#BCF3FF",
        secondary: "#211f27",
        secondaryContainer: "#445458",
        bgError: "#F2B8B5",
        textError: "#601410",
        contrast: "#fff",
        text: "#E0ECEB",
        surface: "#1D1B20",
        outline: "#CAC4D0",
    },
};
