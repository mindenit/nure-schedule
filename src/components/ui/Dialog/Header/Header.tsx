import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./Header.styles";
import { Close } from "@mui/icons-material";

interface DialogHeaderProps extends Omit<ComponentPropsWithoutRef<"header">, "children"> {
  title: string;
}

export const DialogHeader = forwardRef<
  ElementRef<"header">,
  DialogHeaderProps
>(({ title, ...props }, ref) => {
  return (
    <S.StyledDialogHeader ref={ref} {...props}>
      <S.StyledHeaderTitle>{title}</S.StyledHeaderTitle>
      <DialogPrimitive.Close asChild>
        <S.StyledCloseButton><Close /></S.StyledCloseButton>
      </DialogPrimitive.Close>
    </S.StyledDialogHeader>
  )
});

DialogHeader.displayName = "DialogHeader";
