import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { media } from 'styles/media';

export const StyledList = styled(TabsPrimitive.List)`
  @media ${media.small} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    &[data-variant="compact"] {
      .Trigger {
        width: 48px;
        height: 48px;
        padding: 0 .5rem;
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
          font-size: 16px;
        }
    }

    &[data-variant="default"] {
      .Trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 48px;
        font-size: 16px;
      }
    }
  }
`;