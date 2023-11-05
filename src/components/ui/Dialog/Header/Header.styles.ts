import styled from "styled-components";

export const StyledDialogHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
`;

export const StyledHeaderTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.textContrast};
`;

export const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 8px;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    svg {
        width: 18px;
        height: 18px;
    }
`;
