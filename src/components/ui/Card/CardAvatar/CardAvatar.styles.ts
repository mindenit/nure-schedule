import styled from "styled-components";
import { TitleMedium } from "styles/components";

interface Props {
    color: string;
}

export const StyledCardAvatar = styled.div<Props>`
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 50%;

    background-color: ${(props) => props.color};

    text-align: center;
`;

export const StyledCardAvatarText = styled(TitleMedium)`
    color: #ffffff;
    text-align: center;
`;
