import styled from "styled-components";
import { media } from "styles/media";

export const StyledHeader = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    width: 100%;
    height: fit-content;
    background: transparent;
    color: ${({ theme }) => theme.colors.textContrast};
    padding: 0.5rem;
    box-sizing: border-box;

    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;

    @media ${media.small} {
        margin-left: 10px;
    }
`;
