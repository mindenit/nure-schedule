import { Check } from "@mui/icons-material";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as S from "./Trigger.styles";
import { ElementRef, forwardRef } from "react";

export const TabsTrigger = forwardRef<
    ElementRef<typeof TabsPrimitive.Trigger>,
    TabsPrimitive.TabsTriggerProps
>(({ children, ...props }, ref) => {
    return (
        <S.StyledTabsTrigger ref={ref} className="Trigger" {...props}>
            <Check />
            {children}
        </S.StyledTabsTrigger>
    );
});

TabsTrigger.displayName = "TabsTrigger";
