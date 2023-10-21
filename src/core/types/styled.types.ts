export interface ITheme {
    colors: {
        primary: string;
        primaryText: string;
        secondary: string;

        secondaryContainer: string;
        surfaceContainer: string;

        navbarChip: string;
        modalBg: string;
        modalCloseElement: string;

        activeCard: string;

        appBackground: string;
        windowBackground: string;
        surface: string;
        surfaceVariant: string;
        desktopHeader: string;

        text: string;
        textDarker: string;
        textContrast: string;
        textCalendar: string;

        emojiColor: string;
        iconColor: string;

        bgError: string;
        textError: string;

        outline: string;
    };
}

export interface IMedia {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
}
