import styled from "styled-components";

export const TitleMedium = styled.h4`
    color: ${({ theme }) => theme.colors.text};

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.15px;
`;

export const TitleBig = styled.h3`
    color: ${({ theme }) => theme.colors.textContrast};

    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
`;

export const TitleLarge = styled.h2`
    color: ${({ theme }) => theme.colors.textContrast};

    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;

    margin-bottom: 10px;
`;

export const Container = styled.div`
    width: min(100% - 15px, 13000px);
    margin-inline: auto;
`;
