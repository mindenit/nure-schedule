import styled from "styled-components";

export const StyledCard = styled.div`
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
`;

export const StyledCardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const StyledCardText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;