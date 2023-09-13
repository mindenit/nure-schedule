import styled from "styled-components";
import { media } from "styles/media";

export const StyledListHeader = styled.div`
  @media ${media.small} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;
