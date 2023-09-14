import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLogoText = styled.h2`
    color: ${({ theme }) => theme.colors.textContrast};
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
