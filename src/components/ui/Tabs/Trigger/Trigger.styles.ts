import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import { transparentize } from "polished";

export const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.textContrast};
    border: 1px solid ${({ theme }) => theme.colors.outline};
    gap: 0.5rem;
    svg {
        display: none;
        overflow: hidden;
    }
    &:focus,
    &:hover {
        background-color: ${({ theme }) =>
            transparentize(0.4, theme.colors.navbarChip)};
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
`;
