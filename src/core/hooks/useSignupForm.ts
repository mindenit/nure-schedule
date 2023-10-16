import { useState, ChangeEvent } from "react";
import { useSearchParams } from "./useSearchParams";
import { email, flatten, minLength, object, parse, string } from "valibot";
import { handleFieldError } from "core/utils/handleFieldError";
import { IValidationError } from "core/interfaces/validation.interfaces";
import { getFormData } from "core/utils/getFormData";

export const useSignupForm = () => {
    const { handle, get } = useSearchParams();
    const [emailValue, setEmailValue] = useState(get("email") ?? "");
    const [passwordValue, setPasswordValue] = useState(get("password") ?? "");
    const [validatonError, setValidationError] =
        useState<IValidationError | null>(null);
    const isDisabled = [emailValue, passwordValue].some(
        (value) => value === ""
    );
    const schema = object({
        email: string([email()]),
        password: string([
            minLength(6, "Пароль має містити що найменше 6 символів"),
        ]),
    });

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
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = getFormData(e);

        try {
            const parsedData = parse(schema, data);
            console.log(parsedData);
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
    };
};
