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
    z-index: 10;
    box-sizing: border-box;
    padding: 1.5rem 2rem;

    @media ${media.small} {
        width: 100%;
        height: 500px;
        bottom: 0;
        border-radius: 20px 20px 0 0;
    }

    @media (min-width: 900px) {
        width: 400px;
        min-height: 300px;
        max-height: 500px;
        border-radius: 40px;
        left: 40%;
        top: 20%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;
