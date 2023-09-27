import styled from "styled-components";

export const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
`;

export const DropDownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.surfaceContainer};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 150px;
`;

export const DropDownListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
`;
