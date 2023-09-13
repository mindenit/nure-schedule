import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ElementRef, forwardRef } from 'react';

export const DialogTrigger = forwardRef<
  ElementRef<typeof DialogPrimitive.Trigger>,
  DialogPrimitive.DialogTriggerProps
>(({ ...props }, ref) => {
  return <DialogPrimitive.Trigger ref={ref} asChild {...props} />
});

DialogTrigger.displayName = "DialogTrigger";
