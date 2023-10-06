import styled from "styled-components";
import { media } from "styles/media";

export const StyledWeekHeader = styled.span`
    @media ${media.small} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        min-width: 90px;
        height: fit-content;
        background: transparent;
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.textContrast};

        &[data-active="true"] {
            .Badge {
                background-color: ${({ theme }) => theme.colors.navbarChip};
            }
        }

        .Badge {
            display: flex;
            justify-items: center;
            align-items: center;
            width: auto;
            padding: 0.5rem;
            box-sizing: border-box;
            border-radius: 24px;
        }
    }
`;
