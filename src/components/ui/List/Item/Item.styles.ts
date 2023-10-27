import styled from "styled-components";

export const StyledListItem = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textContrast};
    letter-spacing: 0.5px;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 8px;

    &:hover {
        background: ${({ theme }) => theme.colors.surfaceContainer};
    }
`;

export const StyledAvatar = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.primaryContainer};
    color: ${({ theme }) => theme.colors.onPrimaryContainer};
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.15px;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;
