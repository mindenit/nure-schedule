import { authSchema } from "core/schemas/auth.schema";
import { Output } from "valibot";

export type TAuthInput = Output<typeof authSchema>;
