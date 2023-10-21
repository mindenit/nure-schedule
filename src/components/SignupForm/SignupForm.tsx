import { TextField } from "components/ui/TextField/TextField";
import * as S from "./Signup.styles";
import { Button } from "components/ui/Button";
import { useSignupForm } from "core/hooks/useSignupForm";
import * as C from "../../styles/components";
import { Link } from "react-router-dom";

export const SignupForm = () => {
    const {
        emailValue,
        passwordValue,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        validatonError,
        isDisabled,
        isLoading,
        formError,
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
                {isLoading ? "Реєстратиція..." : "Зареєструватися"}
            </Button>
            <S.StyledTextContainer>
                <C.TitleMedium>
                    Не має аккаунту? <Link to="/signin">Увійти</Link>
                </C.TitleMedium>
                <Link to="/">Продовжити як гість</Link>
            </S.StyledTextContainer>
        </S.StyledForm>
    );
};
