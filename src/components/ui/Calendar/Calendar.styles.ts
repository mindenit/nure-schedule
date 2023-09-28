import styled from "styled-components";

export const StyledHeadersRoot = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
`;

export const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.25rem;

    .ToolbarItem {
        display: flex;
        flex-direction: row;
    }
`;

export const StyledTabsRoot = styled.div`
    width: 100%;
    height: 100%;
`;
