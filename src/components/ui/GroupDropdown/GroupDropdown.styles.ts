import styled from "styled-components";
import * as C from "styles/components";

export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;
`;

export const DropDownTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DropDownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    padding: 8px 12px;
    width: 200px;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.surfaceContainer};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DropDownListItem = styled(C.TitleBig)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    cursor: pointer;
`;
