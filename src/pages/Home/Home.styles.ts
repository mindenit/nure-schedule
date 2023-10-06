import styled from "styled-components";

import * as C from "styles/components";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { media } from "styles/media";

export const HomeContainer = styled(C.Container)`
    height: 100%;
    position: relative;
`;

export const HomeEmptyPageContainer = styled.div`
    height: 100%;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HomeFilledPageContainer = styled.div`
    &:first-child {
        margin-bottom: 25px;
    }
`;

export const HomeEmoji = styled(SentimentVeryDissatisfiedIcon)`
    color: ${({ theme }) => theme.colors.emojiColor};

    width: 175px !important;
    height: 175px !important;

    @media ${media.small} {
        width: 165px !important;
        height: 165px !important;
        margin-bottom: 10px;
    }
`;

export const HomeTitle = styled.h2`
    color: ${({ theme }) => theme.colors.textContrast};
    font-family: "Montserrat", sans-serif;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 40px;
    line-height: 45px;

    @media ${media.small} {
        color: ${({ theme }) => theme.colors.textContrast};
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }
`;

export const HomeSubtitle = styled.h3`
    color: ${({ theme }) => theme.colors.textContrast};
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.25px;

    @media ${media.small} {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const HomeButtonContainer = styled.div`
    @media ${media.small} {
        position: fixed;
        bottom: 100px;
        right: 0;
        z-index: 2;
    }
`;

export const HomeDialogContainer = styled.div`
    padding-bottom: 18px;
`;
