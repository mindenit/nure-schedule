import styled from "styled-components";

export const StyledDayCell = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.outline};
    padding: 0.5rem;
    box-sizing: border-box;

    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 800;
    line-height: 12px; /* 66.667% */
    letter-spacing: 0.25px;

    &[data-current="false"] {
        span {
            color: ${({ theme }) => theme.colors.textCalendar};
        }
    }
`;

export const StyledDialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const StyledSubjectsList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledSubjectTitle = styled.li`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 0.25rem 0;
`;

export const StyledSubjectsIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    width: fit-content;
    padding: 0 0.5rem;
    background-color: ${({ theme }) => theme.colors.bgError};
    color: ${({ theme }) => theme.colors.appBackground};
    font-size: 14px;
    border-radius: 8px;
`;

export const StyledDayCircle = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.outline};
    &[data-current="true"] {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.appBackground};
    }
`;
