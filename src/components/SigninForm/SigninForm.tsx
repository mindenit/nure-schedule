import { Button } from "components/ui/Button";
import { TextField } from "components/ui/TextField/TextField";
import { useSigninForm } from "core/hooks/useSigninForm";
import * as S from "./SigninForm.styles";

export const SigninForm = () => {
    const {
        emailValue,
        passwordValue,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        isDisabled,
        validatonError,
    } = useSigninForm();

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
                Увійти
            </Button>
        </S.StyledForm>
    );
};
