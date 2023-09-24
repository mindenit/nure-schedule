import { Mood } from "@mui/icons-material";
import styled from "styled-components";
import * as C from "styles/components";
import { media } from "styles/media";

export const StyledEventsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 0.5rem;
    margin: 1rem 0 0 0;
`;

export const StyledEmptyList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
`;

export const StyledEmoji = styled(Mood)`
    color: ${({ theme }) => theme.colors.emojiColor};
    width: 165px !important;
    height: 165px !important;
`;

export const StyledTitle = styled(C.TitleBig)`
    @media ${media.small} {
        font-size: 40px;
        line-height: 45px;
    }

    @media ${media.large} {
        font-size: 20px;
        line-height: 24px;
    }
`;
