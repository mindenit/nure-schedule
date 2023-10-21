import { Button } from "components/ui/Button";
import { TextField } from "components/ui/TextField/TextField";
import { useSigninForm } from "core/hooks/useSigninForm";
import * as S from "./SigninForm.styles";
import * as C from "../../styles/components";
import { Link } from "react-router-dom";

export const SigninForm = () => {
    const {
        emailValue,
        passwordValue,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        isDisabled,
        validatonError,
        isLoading,
        formError,
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
                autoFocus
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
            {formError !== null && <p>{String(formError)}</p>}
            <Button variant="filled" disabled={isDisabled || isLoading}>
                {isLoading ? "Вхід..." : "Увійти"}
            </Button>
            <S.StyledTextContainer>
                <C.TitleMedium>
                    Вже є аккаунт? <Link to="/signup">Зареєструватися</Link>
                </C.TitleMedium>
                <Link to="/">Продовжити як гість</Link>
            </S.StyledTextContainer>
        </S.StyledForm>
    );
};
