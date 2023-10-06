import styled from "styled-components";
import { media } from "styles/media";

export const StyledWeekHeader = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background: transparent;
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

    @media ${media.small} {
        min-width: 90px;
    }
`;
