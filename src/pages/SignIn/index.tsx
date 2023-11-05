import { SigninForm } from "components/SigninForm/SigninForm";
import AuthLayout from "pages/layout/AuthLayout";
import { FC } from "react";

const SignIn: FC = () => {
    return (
        <AuthLayout logoText="Вхід">
            <SigninForm />
        </AuthLayout>
    );
};

export default SignIn;
