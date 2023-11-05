import styled from "styled-components";

export const StyledTimeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 33px 0 0 0;
`;

export const StyledTimelineItem = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textContrast};

    &:nth-child(odd) {
        margin: 0 0 95px 0;
    }

    &:nth-child(even) {
        margin: 0 0 10px 0;
    }
`;
