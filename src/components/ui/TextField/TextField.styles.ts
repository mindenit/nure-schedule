import styled from "styled-components";

export const StyledInputContainer = styled.div`
    position: relative;

    .Placeholder {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 3px solid transparent;
        background-color: transparent;
        pointer-events: none;
        margin-left: 8px;
    }

    .Text {
        font-size: 20px;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        padding: 0 0.5rem;
        background-color: transparent;
        transform: translate(0);
        color: ${({ theme }) => theme.colors.textContrast};
        transition:
            transform 0.15s ease-out,
            font-size 0.15s ease-out,
            background-color 0.2s ease-out,
            color 0.15s ease-out;
    }
`;

export const StyledInput = styled.input`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    min-width: 210px;
    height: 56px;
    background: ${({ theme }) => theme.colors.appBackground};
    font-size: 20px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.textContrast};
    line-height: 24px;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.navbarChip};
    padding: 8px 0px 8px 16px;
    box-sizing: border-box;

    &:hover,
    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.outline};
    }

    &:focus + .Placeholder .Text {
        background-color: ${({ theme }) => theme.colors.appBackground};
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.outline};
        transform: translate(0, -170%);
    }

    &:focus + .Placeholder .Text {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: ${({ theme }) => theme.colors.textContrast};
    }

    &:not(&:focus):not(&[value=""]) + .Placeholder .Text {
        overflow: hidden;
        font-size: 0;
        color: transparent;
    }
`;
