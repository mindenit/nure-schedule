import * as S from "./Questions.styles";
import * as C from "styles/components";

import MainLayout from "pages/layout/MainLayout";
import { Card } from "components/ui/Card";

import { RawInfoCardProps } from "core/types/card.types";

interface Props {
    cards?: RawInfoCardProps[];
}

const Questions: React.FC<Props> = ({ cards }) => {
    return (
        <MainLayout logoText="Питання">
            <C.Container>
                <S.QuestionsPageContainer>
                    {cards ? (
                        cards.map((card, index) => (
                            <Card
                                key={index}
                                cardType="info"
                                isFullWidth
                                id={String(index)}
                                title={card.title}
                                subhead={card.subhead}
                                desc={card.desc}
                            />
                        ))
                    ) : (
                        <C.TitleLarge>Активних питань немає</C.TitleLarge>
                    )}
                </S.QuestionsPageContainer>
            </C.Container>
        </MainLayout>
    );
};

export default Questions;
