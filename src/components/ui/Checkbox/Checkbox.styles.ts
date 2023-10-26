import styled from "styled-components";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { transparentize } from "polished";

export const StyledCheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.appBackground};

    &:hover {
        background: ${({ theme }) =>
            transparentize(0.7, theme.colors.navbarChip)};
    }

    &:has(.Checkbox:focus) {
        background: ${({ theme }) =>
            transparentize(0.12, theme.colors.navbarChip)};
    }

    &:active {
        background: ${({ theme }) =>
            transparentize(0.5, theme.colors.navbarChip)};
    }

    &:has(.Checkbox:disabled) {
        pointer-events: none;
    }
`;

export const StyledCheckbox = styled(CheckboxPrimitive.Root)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.appBackground};
    border: 2px solid ${({ theme }) => theme.colors.outline};
    border-radius: 4px;

    svg {
        width: 18px;
        height: 18px;
        color: transparent;
    }

    &:focus {
        outline: none;
    }

    &[data-state="checked"] {
        border: 2px solid ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary};

        svg {
            color: ${({ theme }) => theme.colors.appBackground};
        }

        &[data-disabled] {
            background: ${({ theme }) =>
                transparentize(0.7, theme.colors.primary)};
            border: 2px solid
                ${({ theme }) => transparentize(0.6, theme.colors.primary)};
        }
    }

    &[data-disabled] {
        pointer-events: none;
        border: 2px solid
            ${({ theme }) => transparentize(0.6, theme.colors.outline)};
    }
`;
