import "styled-components";

import { ITheme } from "core/interfaces/styled.types";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
