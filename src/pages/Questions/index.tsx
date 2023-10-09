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
            <S.QuestionsPageContainer>
                {cards ? (
                    cards.map((card, index) => (
                        <Card
                            key={index}
                            cardType="info"
                            isFullWidth
                            id={card.title}
                            title={card.title}
                            subhead={card.subhead}
                            desc={card.desc}
                        />
                    ))
                ) : (
                    <C.TitleLarge>Активних питань немає</C.TitleLarge>
                )}
            </S.QuestionsPageContainer>
        </MainLayout>
    );
};

export default Questions;
