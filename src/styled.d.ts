import "styled-components";

import { ITheme } from "core/interfaces/styled";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
