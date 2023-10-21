import styled from "styled-components";

export const TitleLight = styled.h5`
    color: ${({ theme }) => theme.colors.text};

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
`;

export const TitleMedium = styled.h4`
    color: ${({ theme }) => theme.colors.text};

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.15px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primaryText};

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
    width: min(100% - 30px, 1300px);
    margin-inline: auto;
`;

export const FullWidthContainer = styled.div`
    width: 100%;
`;

export const CenteredElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
`;
