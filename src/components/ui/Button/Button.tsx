import styled, { css } from "styled-components";
import { transparentize } from "polished";

import getTransition from "core/utils/getTransition";

interface Props {
    variant?: "filled" | "outlined" | "text";
}

const Button = styled.button<Props>`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    padding: 10px 24px;

    border-radius: 100px;

    border: none;
    outline: none;

    cursor: pointer;

    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;

    ${getTransition(300, ["box-shadow", "background-color", "border"])};

    ${({ theme, variant }) => {
        switch (variant) {
            case "filled":
                return css`
                    color: ${({ theme }) => theme.colors.primaryText};
                    background-color: ${theme.colors.primary};

                    &:hover {
                        box-shadow:
                            0px 1px 3px 1px rgba(0, 0, 0, 0.15),
                            0px 1px 2px 0px rgba(0, 0, 0, 0.3);
                    }

                    &:active,
                    &:focus {
                        background-color: ${transparentize(
                            0.12,
                            theme.colors.primary
                        )};
                    }
                    &:disabled {
                        background-color: ${transparentize(
                            0.9,
                            theme.colors.primary
                        )};
                        &:hover {
                            box-shadow: none;
                            cursor: auto;
                        }
                    }
                `;
            case "outlined":
                return css`
                    color: ${theme.colors.primary};
                    background-color: transparent;
                    border: 1px solid ${theme.colors.outline};

                    &:active,
                    &:focus {
                        border: 1px solid ${theme.colors.primary};
                    }
                    &:disabled {
                        background-color: ${transparentize(
                            0.9,
                            theme.colors.primary
                        )};
                        &:hover {
                            cursor: auto;
                        }
                    }
                `;
            case "text":
                return css`
                    color: ${theme.colors.primary};
                    background-color: transparent;
                    &:disabled {
                        background-color: ${transparentize(
                            0.9,
                            theme.colors.primary
                        )};
                        &:hover {
                            cursor: auto;
                        }
                    }
                `;
            default:
                break;
        }
    }}
`;

Button.defaultProps = {
    variant: "filled",
};

export { Button };
