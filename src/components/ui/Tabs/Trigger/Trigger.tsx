import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ElementRef, forwardRef } from "react";
import * as S from "./Trigger.styles";
import { Check } from "@mui/icons-material";

export const TabsTrigger = forwardRef<
    ElementRef<typeof TabsPrimitive.Trigger>,
    TabsPrimitive.TabsTriggerProps,
>(({ children, ...props }, ref) => {
    return (
        <S.StyledTabsTrigger
            ref={ref}
            className="Trigger"
            variant={variant}
            {...props}
        >
            <Check />
            {children}
        </S.StyledTabsTrigger>
    );
});

TabsTrigger.displayName = "TabsTrigger";
