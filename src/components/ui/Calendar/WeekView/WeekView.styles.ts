import styled from "styled-components";
import { media } from "styles/media";

export const StyledWeekView = styled.section`
    @media ${media.small} {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        max-width: 100%;
        max-height: 600px;
        overflow-y: auto;
        overflow-x: scroll;
        gap: 0.5rem;
        margin: 1rem 0 0 0;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-height: 600px;
        gap: 0.5rem;
        margin: 1rem 0 0 0;
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
