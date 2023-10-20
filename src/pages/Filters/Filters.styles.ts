import styled from "styled-components";
import { media } from "styles/media";

export const StyledFiltersPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 1000px;
    height: fit-content;
    margin: 1rem auto;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;

    @media ${media.small} {
        padding: 0 1rem;
        box-sizing: border-box;
    }
`;

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    gap: 1rem;

    @media (min-width: 900px) {
        width: 700px;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`;

export const StyledCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    gap: 1rem;
`;
