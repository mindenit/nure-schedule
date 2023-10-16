import styled from "styled-components";
import { media } from "styles/media";

export const StyledNavbar = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    gap: 8px;
    z-index: 4;
    @media ${media.medium} {
        background-color: ${({ theme }) => theme.colors.surfaceContainer};
        padding: 12px 8px 12px 8px;
        width: 100%;
        position: fixed;
        bottom: 0;
    }
`;

export const StyledNavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 32px;
    border-radius: 16px;
    letter-spacing: 0.5px;
    svg {
        width: 24px;
        height: 24px;
    }
`;
