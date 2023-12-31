import MainLayout from "pages/layout/MainLayout";
import { InDevelopmentLoader } from "./InDevelopmentLoader";
import * as S from "./InDevelopment.styles";
import * as C from "styles/components";

interface Props {
    children?: React.ReactNode | React.ReactNode[];
}

export const InDevelopment: React.FC<Props> = ({ children }) => {
    return (
        <MainLayout logoText="Упс...">
            <C.Container>
                <S.InDevContainer>
                    <C.CentredText>
                        <C.TitleLarge>
                            Цей функціонал ще в розробці
                        </C.TitleLarge>
                        <C.TitleBig>
                            Команда розробників реалізує його найближчим часом.
                            <br />
                            Трішки терпіння...
                        </C.TitleBig>
                    </C.CentredText>
                    {children}
                    <InDevelopmentLoader />
                </S.InDevContainer>
            </C.Container>
        </MainLayout>
    );
};
