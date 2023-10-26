import styled from "styled-components";
import { media } from "styles/media";

export const StyledWeekView = styled.section`
    display: flex;
    width: 100%;
    gap: 0.5rem;
    margin: 1rem 0 0 0;

    @media ${media.small} {
        flex-direction: row;
        flex-wrap: nowrap;
        max-height: 600px;
        overflow-y: auto;
        overflow-x: scroll;
        padding: 0 0 120px 0;
        box-sizing: border-box;
    }

    @media (min-width: 900px) {
        flex-direction: row;
        max-height: 600px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledHeadersRoot = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
`;
