import styled from "styled-components";
import { media } from "styles/media";

export const StyledItem = styled.div`
  @media ${media.small} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 54px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.modalBg};
    box-sizing: border-box;
    padding: 0 1rem;
    border-radius: 27px;
    .Dot {
      display: flex;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.navbarChip};
      color: ${({ theme }) => theme.colors.textContrast};
      .Dot {
        display: flex;
        width: 12px;
        height: 12px;
        background-color: ${({ theme }) => theme.colors.textContrast};
        border-radius: 8px;
      }
    }
  }
`;
