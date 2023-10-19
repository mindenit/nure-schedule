import { IValidationError } from "core/interfaces/validation.interfaces";
import { FlatErrors } from "valibot";

interface IArgs {
    error: FlatErrors;
    names: string[];
    callback?: (err: IValidationError) => void;
}

export function handleFieldError({ error, names, callback }: IArgs) {
    const errorObj = {};

    for (const name of names) {
        if (name in error.nested) {
            Object.assign(errorObj, {
                [name]: error.nested[name].join(" "),
            });

            if (callback) {
                callback(errorObj);
            } else {
                console.warn(errorObj);
            }
        }
    }
}
