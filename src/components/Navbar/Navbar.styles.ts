import styled from "styled-components";
import { media } from "styles/media";

export const StyledNavbar= styled.header`
    @media ${media.small} {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 80px;
        background-color: ${({ theme }) => theme.colors.surfaceContainer};
        gap: 8px;
        padding: 0 8px 0 8px;
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
`
