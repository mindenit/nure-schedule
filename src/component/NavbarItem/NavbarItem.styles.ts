import styled from "styled-components";
import { media } from "styles/media";

export const LinkStyled = styled.a<{ $isActive: boolean }>`
  @media ${media.small} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 4px;
    font-size: 12px;
    line-height: 16px;
    font-weight: ${({ $isActive }) => $isActive ? 600 : 500 };
    color: ${({ $isActive, theme }) => $isActive ? theme.colors.contrast : theme.colors.text};
    background-color: transparent;

    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.contrast};
      .IconContainer {
        background-color: ${({ theme }) => theme.colors.secondaryContainer};        
      }
    }
  
    .IconContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 32px;
      border-radius: 16px;
      background-color: ${({ $isActive, theme }) => $isActive && theme.colors.secondaryContainer};
      letter-spacing: 0.5px;
      .IconBadge {
        display: flex;
        position: absolute;
        min-width: 16px;
        width:  fit-content;
        height: 16px;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        background-color: ${({ theme }) => theme.colors.bgError};
        color: ${({ theme }) => theme.colors.textError};
        border-radius: 8px;
        margin: 0 0 10px 16px;
        padding: 0 3px 0 3px;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`
