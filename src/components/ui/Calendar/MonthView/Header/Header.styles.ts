import styled from "styled-components";
import { media } from "styles/media";

export const StyledHeader = styled.span`
    @media ${media.small} {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background: transparent;
        color: ${({ theme }) => theme.colors.textContrast};
        padding: 0.5rem;
        box-sizing: border-box;
    }
`;
