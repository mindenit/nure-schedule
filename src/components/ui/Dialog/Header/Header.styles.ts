import styled from "styled-components";

export const StyledDialogHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

export const StyledHeaderTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textContrast};
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 8px;
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.colors.text};

  svg {
    width: 18px;
    height: 18px;
  }
`;
