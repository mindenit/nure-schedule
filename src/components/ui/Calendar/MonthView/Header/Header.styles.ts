import styled from "styled-components";

export const StyledHeader = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background: transparent;
    color: ${({ theme }) => theme.colors.textContrast};
    padding: 0.5rem;
    box-sizing: border-box;
`;
