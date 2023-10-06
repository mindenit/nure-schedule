import styled from "styled-components";
import { media } from "styles/media";

export const StyledCard = styled.div<{ isFullWidth: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    align-self: stretch;
    border: 1px solid ${({ theme }) => theme.colors.outline};
    border-radius: 12px;

    margin-bottom: 15px;

    background-color: ${({ theme }) => theme.colors.surface};

    padding: 16px;

    width: ${({ isFullWidth }) => (isFullWidth === true ? "100%" : "350px")};

    @media ${media.small} {
        width: 100%;
    }
`;

export const StyledCardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const StyledCardGroupContainer = styled(StyledCardGrid)`
    width: 100%;
`;

export const StyledCardText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;

export const InfoCardText = styled.h5`
    color: ${({ theme }) => theme.colors.text};

    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.25px;
`;

export const InfoCardGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
`;
