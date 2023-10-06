import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import { media } from "styles/media";

export const StyledList = styled(TabsPrimitive.List)`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media ${media.small} {
        align-items: center;
        justify-content: center;
        &[data-variant="compact"] {
            .Trigger {
                width: 48px;
                height: 48px;
                padding: 0 0.5rem;
                /* padding: 12px 10px; */
                font-size: 0;
            }

            .Trigger::first-letter {
                font-size: 16px !important;
            }
            .Trigger[data-state="active"] {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 120px;
                /* padding: 12px 10px; */
                font-size: 16px;
            }
        }

        &[data-variant="default"] {
            .Trigger {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 116px;
                height: 48px;
                font-size: 16px;
            }
        }
    }

    @media (min-width: 900px) {
        .Trigger {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 116px;
            height: 48px;
            font-size: 16px;
        }
    }
`;
