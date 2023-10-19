import { IValidationError } from "core/interfaces/validation.interfaces";
import { authSchema } from "core/schemas/auth.schema";
import { getFormData } from "core/utils/getFormData";
import { handleFieldError } from "core/utils/handleFieldError";
import { ChangeEvent, useState } from "react";
import { flatten, parse } from "valibot";
import { useSearchParams } from "./useSearchParams";
import { useSignin } from "./useSignin";

export const useSigninForm = () => {
    const { signin, isLoading, error } = useSignin();
    const { handle, get } = useSearchParams();
    const [emailValue, setEmailValue] = useState(get("email") ?? "");
    const [passwordValue, setPasswordValue] = useState(get("password") ?? "");
    const [validatonError, setValidationError] =
        useState<IValidationError | null>(null);
    const isDisabled = [emailValue, passwordValue].some(
        (value) => value === ""
    );

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setEmailValue(value);
        handle("email", value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setPasswordValue(value);
        handle("password", value);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = getFormData(e);

        try {
            const parsedData = parse(authSchema, data);
            await signin(parsedData);
        } catch (error) {
            handleFieldError({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                error: flatten(error),
                names: Object.keys(data),
                callback(err) {
                    setValidationError(err);
                },
            });
        }
    };

    return {
        emailValue,
        passwordValue,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        isDisabled,
        validatonError,
        isLoading,
        formError: error,
    };
};
