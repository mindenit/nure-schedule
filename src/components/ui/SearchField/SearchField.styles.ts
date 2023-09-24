import styled from "styled-components";

import { Search } from "@mui/icons-material";

export const StyledInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: ${({ theme }) => theme.colors.secondaryContainer};
    border-radius: 28px;
    padding: 15px 15px 15px 20px;
`;

export const StyledSearchField = styled.input`
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
`;

export const SearchIcon = styled(Search)`
    color: ${({ theme }) => theme.colors.iconColor};
`;
