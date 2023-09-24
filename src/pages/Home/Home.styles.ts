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
    width: 165px !important;
    height: 165px !important;

    margin-bottom: 10px;
`;

// TODO: Remove !important tags

export const HomeTitle = styled(C.TitleBig)`
    @media ${media.small} {
        font-size: 40px;
        line-height: 45px;
    }

    @media ${media.large} {
        font-size: 20px;
        line-height: 24px;
    }
`;

export const HomeButtonContainer = styled.div`
    @media ${media.small} {
        position: absolute;
        bottom: 20px;
        right: 0;
    }
`;

export const HomeDialogContainer = styled.div`
    padding-bottom: 18px;
`;
