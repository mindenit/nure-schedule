import { TextField } from "components/ui/TextField/TextField";
import * as S from "./Signup.styles";
import { Button } from "components/ui/Button";
import { useSignupForm } from "core/hooks/useSignupForm";

export const SignupForm = () => {
    const {
        emailValue,
        passwordValue,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        validatonError,
        isDisabled,
    } = useSignupForm();

    return (
        <S.StyledForm onSubmit={handleSubmit}>
            <TextField
                id="email"
                type="email"
                name="email"
                inputMode="email"
                placeholder="Електронна пошта"
                value={emailValue}
                onChange={handleEmailChange}
                error={validatonError !== null ? validatonError["email"] : ""}
            />
            <TextField
                id="password"
                type="password"
                name="password"
                inputMode="text"
                placeholder="Пароль"
                value={passwordValue}
                onChange={handlePasswordChange}
                error={
                    validatonError !== null ? validatonError["password"] : ""
                }
            />
            <Button variant="filled" disabled={isDisabled}>
                Зареєструватися
            </Button>
        </S.StyledForm>
    );
};
