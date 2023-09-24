import styled from "styled-components";

export const StyledEventsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 75px;
    height: fit-content;
    border-left: 1px solid ${({ theme }) => theme.colors.outline};
    &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.outline};
    }

    .ColumnItem {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
        padding: 0.5rem;
        box-sizing: border-box;
        gap: 0.5rem;
    }

    .ColumnItem:nth-child(even) {
        height: 20px;
    }

    .ColumnItem:nth-child(odd) {
        height: 120px;
    }

    .ColumnItem:last-child {
        display: none;
        overflow: hiddenw;
    }
`;
