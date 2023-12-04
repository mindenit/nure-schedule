import { ElementRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const DialogClose = forwardRef<
    ElementRef<typeof DialogPrimitive.Close>,
    DialogPrimitive.DialogCloseProps
>(({ children, asChild, ...props }, ref) => {
    return (
        <DialogPrimitive.Close ref={ref} asChild {...props}>
            {children}
        </DialogPrimitive.Close>
    );
});

DialogClose.displayName = "DialogClose";
