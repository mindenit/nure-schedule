import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent } from "./Content/Content";
import { DialogHeader } from "./Header/Header";
import { DialogTrigger } from "./Trigger/Trigger";

const DialogRoot = DialogPrimitive.Root;

export const Dialog = {
    ...{
        Root: DialogRoot,
        Content: DialogContent,
        Header: DialogHeader,
        Trigger: DialogTrigger,
    },
};
