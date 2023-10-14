import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ElementRef, forwardRef } from "react";
import * as S from "./Trigger.styles";
import { Check } from "@mui/icons-material";

interface Props extends TabsPrimitive.TabsTriggerProps {
    variant?: string;
}

export const TabsTrigger = forwardRef<
    ElementRef<typeof TabsPrimitive.Trigger>,
    Props
>(({ children, variant, ...props }, ref) => {
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
