import styled from "styled-components";

export const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const MainLayoutContent = styled.div`
    flex-grow: 1;
`;

export const MainLayoutFooter = styled.div`
    flex-shrink: 0;
`;

export const MainLayoutHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
    margin-bottom: 10px;
`;
