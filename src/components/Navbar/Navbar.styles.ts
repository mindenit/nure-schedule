import styled from "styled-components";
import { media } from "styles/media";

export const NavbarStyles = styled.header`
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
