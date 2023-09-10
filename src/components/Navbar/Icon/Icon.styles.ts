import styled from "styled-components";

export const NavbarIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 32px;
    border-radius: 16px;
    letter-spacing: 0.5px;
    .IconBadge {
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
    }
    svg {
        width: 24px;
        height: 24px;
    }
`;
