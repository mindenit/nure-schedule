import styled from "styled-components";
import { media } from "styles/media";

export const StyledFiltersPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
    margin: 1rem auto;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (min-width: 900px) {
        width: 700px;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
`;

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    gap: 1rem;
    margin-top: 1rem;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
`;

export const FilterButtonContainer = styled.div`
    @media ${media.medium} {
        position: fixed;
        bottom: 100px;
        right: 15px;
        z-index: 2;
    }
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
