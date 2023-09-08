import { css } from "styled-components";

/*
* USAGE:

const Something = styled.div`
  ${({ theme }) =>
    getTransition(theme.durations.ms300, [
      'background-color',
      'border-color',
      'color',
   ])}
`
*/

const getTransition = (
    duration: number,
    property: string[] | string = ["background-color", "color"],
    animation = "ease",
) => css`
    transition-property: ${Array.isArray(property)
        ? property.join(", ")
        : property};
    transition-duration: ${duration}ms;
    transition-timing-function: ${animation};
`;

export default getTransition;
