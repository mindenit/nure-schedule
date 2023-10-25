import styled from "styled-components";

export const AuthLayout = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;
    transition: 0.5s;
`;

export const AuthLayoutContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    gap: 1.25rem;
    @media (min-width: 900px) {
        border: 2px solid ${({ theme }) => theme.colors.outline};
        width: 420px;
        height: fit-content;
        border-radius: 20px;
        padding: 30px;
        box-sizing: border-box;
    }
`;
