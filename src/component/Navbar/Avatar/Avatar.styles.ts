import styled from "styled-components";

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-radius: 16px;
  letter-spacing: 0.5px;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    object-fit: cover;
  }
`