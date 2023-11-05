import styled from "styled-components";

export const StyledListAction = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textContrast};
    border: 0;

    svg {
        width: 18px;
        height: 18px;
    }
`;
