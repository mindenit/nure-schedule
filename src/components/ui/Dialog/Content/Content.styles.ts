import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from "styled-components";
import { media } from 'styles/media';

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
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 1;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
