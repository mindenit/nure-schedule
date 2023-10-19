import { Logo } from "components/ui/Logo";
import { FC, PropsWithChildren } from "react";
import * as S from "./AuthLayout.styles";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    const logoText = "Розклад";

    return (
        <S.AuthLayout>
            <S.AuthLayoutContainer>
                <Logo text={logoText} />
                {children}
            </S.AuthLayoutContainer>
        </S.AuthLayout>
    );
};

export default AuthLayout;
