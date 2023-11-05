import styled from "styled-components";

export const StyledIconBadge = styled.span`
    display: flex;
    position: absolute;
    min-width: 16px;
    width: fit-content;
    height: 16px;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    background-color: ${({ theme }) => theme.colors.bgError};
    color: ${({ theme }) => theme.colors.textError};
    border-radius: 8px;
    margin: 0 0 10px 16px;
    padding: 0 3px 0 3px;
`;
