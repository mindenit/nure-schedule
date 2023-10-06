import styled from "styled-components";
import * as C from "styles/components";

export const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    height: 100dvh;
`;

export const MainLayoutContent = styled.div`
    display: flex;
    position: relative;
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

export const MainLayoutDesktopHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.desktopHeader};
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 10px;
`;

export const MainLayoutDesktopContainer = styled(C.Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
