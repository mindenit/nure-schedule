export enum ThemeEnum {
    light = "light",
    dark = "dark",
}

export interface ITheme {
    colors: {
        primary: string;
        secondary: string;
        secondaryContainer: string;
        contrast: string;
        text: string;
        bgError: string;
        textError: string;
    };
}
