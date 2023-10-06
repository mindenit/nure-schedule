import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import { media } from "styles/media";

export const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
    @media ${media.small} {
        background-color: ${({ theme }) => theme.colors.appBackground};
        color: ${({ theme }) => theme.colors.textContrast};
        border: 1px solid ${({ theme }) => theme.colors.outline};
        gap: 0.5rem;
        svg {
            display: none;
            overflow: hidden;
        }
        &:first-child {
            border-radius: 24px 0 0 24px;
        }
        &:last-child {
            border-radius: 0 24px 24px 0;
        }
        &[data-state="active"] {
            background-color: ${({ theme }) => theme.colors.navbarChip};
            svg {
                display: block;
                width: 18px;
                height: 18px;
            }
        }
    }
`;
