import styled from "styled-components";

export const StyledEvents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 0.5rem;

    cursor: pointer;

    &[data-variant="lection"] {
        background-color: #5086a4;
    }

    &[data-variant="pratical"] {
        background-color: #625b71;
    }

    &[data-variant="labaratory"] {
        background-color: #21005d;
    }
`;

export const StyledDialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledEventText = styled.p`
    font-size: 14px;
    color: white;
`;
