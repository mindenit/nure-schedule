import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export const StyledMobileModalCont = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: ${({ theme }) => theme.colors.windowBackground};
    overflow-x: scroll;
`;

export const StyledMobileModalHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.surfaceVariant};

    display: flex;
    flex-direction: column;

    padding: 25px 0;
`;

export const StyledMobileModalIcon = styled(ArrowBackIcon)`
    margin-bottom: 80px;
`;

export const StyledMobileModalTextCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const StyledMobileModalChildrenCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    row-gap: 15px;
`;

export const StyledMobileModalEmptyCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const StyledMobileModalEmptyEmoji = styled(EmojiEmotionsIcon)`
    width: 28px !important;
    height: 28px !important;
`;

export const StyledMobileModalEmptyText = styled.h3`
    color: ${({ theme }) => theme.colors.textContrast};

    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
`;
