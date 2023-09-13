import styled from "styled-components";

import { Search } from "@mui/icons-material";

export const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    display: block;
    margin-bottom: 8px;
`;

export const StyledInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.secondaryContainer};
    border-radius: 28px;
    padding: 15px 15px 15px 20px;
`;

export const StyledInput = styled.input`
    &[type="search"]::-webkit-search-decoration,
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-results-button,
    &[type="search"]::-webkit-search-results-decoration {
        display: none;
    }

    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: 100%;
    color: ${({ theme }) => theme.colors.textContrast};
    border: none;
    outline: none;

    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.5px;
    }
`;

export const SearchIcon = styled(Search)`
    color: ${({ theme }) => theme.colors.iconColor};
`;
