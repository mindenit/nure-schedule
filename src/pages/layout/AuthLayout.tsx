import { Logo } from "components/ui/Logo";
import { FC, PropsWithChildren } from "react";
import * as S from "./AuthLayout.styles";

interface LayoutProps extends PropsWithChildren {
    logoText: string;
}

const AuthLayout: FC<LayoutProps> = ({ children, logoText }) => {
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
