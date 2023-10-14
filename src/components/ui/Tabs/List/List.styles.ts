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
                font-size: 0;
            }

            .Trigger::first-letter {
                font-size: 14px !important;
            }
            .Trigger[data-state="active"] {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 105px;
                font-size: 14px;
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
            min-width: 120px;
            max-width: 300px;
            padding: 10px 12px;
            font-size: 14px;

            flex: 1;
            transition: flex 0.3s ease;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
