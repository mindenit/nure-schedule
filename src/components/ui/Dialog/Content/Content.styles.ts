import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";
import { media } from "styles/media";

export const StyledDialogContent = styled(DialogPrimitive.Content)`
    @media ${media.small} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: fixed;
        width: 100%;
        height: 500px;
        background-color: ${({ theme }) => theme.colors.modalBg};
        overflow-y: scroll;
        bottom: 0;
        z-index: 10;
        box-sizing: border-box;
        padding: 1.5rem 2rem;
        border-radius: 20px 20px 0 0;
        gap: 1rem;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: fixed;
        width: 400px;
        height: 500px;
        max-height: 700px;
        background-color: ${({ theme }) => theme.colors.modalBg};
        overflow-y: scroll;
        z-index: 10;
        box-sizing: border-box;
        padding: 1.5rem 2rem;
        border-radius: 40px;
        gap: 1rem;
        left: 40%;
        top: 20%;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;
