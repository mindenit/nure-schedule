import styled from "styled-components";
import { media } from "styles/media";

export const StyledList = styled.section`
  @media ${media.small} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    gap: .5rem;
  }
`;
