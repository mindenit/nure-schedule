import { Mood } from "@mui/icons-material";
import styled from "styled-components";
import * as C from "styles/components";
import { media } from "styles/media";

export const StyledEventsList = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 1rem 0 0 0;

    @media (min-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }

    @media ${media.small} {
        flex-direction: column;
        gap: 0.5rem;
    }
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
    font-size: 40px;
    line-height: 45px;

    @media ${media.small} {
        font-size: 20px;
        line-height: 24px;
    }
`;
