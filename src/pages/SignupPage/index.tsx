import { SignupForm } from "components/SignupForm/SignupForm";
import AuthLayout from "pages/layout/AuthLayout";
import { FC } from "react";

export const SignupPage: FC = () => {
    return (
        <AuthLayout logoText="Реєстрація">
            <SignupForm />
        </AuthLayout>
    );
};
