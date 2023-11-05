import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";
import { media } from "styles/media";

export const StyledDialogContent = styled(DialogPrimitive.Content)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.modalBg};
    overflow-y: scroll;
    gap: 1rem;
    z-index: 15;
    box-sizing: border-box;
    padding: 18px;

    @media ${media.medium} {
        width: 100%;
        max-height: 500px;
        bottom: 0;
        border-radius: 25px 25px 0 0;
    }

    @media not ${media.medium} {
        width: 400px;
        min-height: 150px;
        max-height: 500px;
        border-radius: 25px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 14;
`;
