import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ElementRef, forwardRef } from "react";
import * as S from "./List.styles";

type ListVariants = "default" | "compact";

interface TabsListProps extends TabsPrimitive.TabsListProps {
    variant?: ListVariants;
}

export const TabsList = forwardRef<
    ElementRef<typeof TabsPrimitive.List>,
    TabsListProps
>(({ variant, ...props }, ref) => {
    return <S.StyledList ref={ref} data-variant={variant} {...props} />;
});

TabsList.displayName = "TabsList";

TabsList.defaultProps = {
    variant: "default",
};
