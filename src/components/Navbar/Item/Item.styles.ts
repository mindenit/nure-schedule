import styled from "styled-components";
import { media } from "styles/media";

export const LinkStyled = styled.a`
    @media ${media.small} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 4px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
        background-color: transparent;
        &:hover,
        &:focus {
            color: ${({ theme }) => theme.colors.textContrast};

            .Container {
                background-color: ${({ theme }) => theme.colors.navbarChip};
            }
        }
        &[data-active="true"] {
            color: ${({ theme }) => theme.colors.textContrast};
            font-weight: 600;

            .Container {
                background-color: ${({ theme }) => theme.colors.navbarChip};
            }
        }
    }
`;
