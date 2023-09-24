import "styled-components";

import { ITheme } from "core/types/styled.types";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
