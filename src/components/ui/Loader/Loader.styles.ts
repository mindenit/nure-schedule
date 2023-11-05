import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        height: 100%;
    }
    100% {
        opacity: 0;
        height: 0;
    }
`;

export const StyledFullScreenLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.appBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    animation: ${fadeOut};
`;

export const StyledSpinner = styled.div`
    width: 56px;
    height: 56px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: ${({ theme }) => theme.colors.primary};
    animation: ${spinAnimation} 1s infinite linear;

    &::before,
    &::after {
        content: "";
        grid-area: 1/1;
        margin: 2px;
        border: inherit;
        border-radius: 50%;
        animation: ${spinAnimation} 2s infinite;
    }

    &::after {
        margin: 8px;
        animation-duration: 3s;
    }
`;

export const StyledLoader = styled.div`
    color: #4a4a4a;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: flex;
    border-radius: 8px;
`;
