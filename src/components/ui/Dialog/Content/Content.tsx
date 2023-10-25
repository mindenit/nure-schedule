import { ElementRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as S from "./Content.styles";

export const DialogContent = forwardRef<
    ElementRef<typeof DialogPrimitive.Content>,
    DialogPrimitive.DialogContentProps
>(({ ...props }, ref) => {
    return (
        <DialogPrimitive.Portal>
            <S.StyledDialogOverlay />
            <S.StyledDialogContent ref={ref} {...props} />
        </DialogPrimitive.Portal>
    );
});

DialogContent.displayName = "DialogContent";
