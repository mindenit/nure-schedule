import styled from "styled-components";
import { media } from "styles/media";

export const StyledDayView = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 1rem;
    margin: 1rem 0 0 0;
    box-sizing: border-box;

    @media ${media.small} {
        padding: 0 0 120px 0;
    }
`;
