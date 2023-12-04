import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent } from "./Content/Content";
import { DialogHeader } from "./Header/Header";
import { DialogTrigger } from "./Trigger/Trigger";
import { DialogClose } from "./Close/Close";

const DialogRoot = DialogPrimitive.Root;

export const Dialog = {
    ...{
        Root: DialogRoot,
        Content: DialogContent,
        Header: DialogHeader,
        Trigger: DialogTrigger,
        Close: DialogClose,
    },
};
