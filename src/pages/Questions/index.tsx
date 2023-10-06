import * as S from "./Questions.styles";

import MainLayout from "pages/layout/MainLayout";
import { Card } from "components/ui/Card";

import { RawInfoCardProps } from "core/types/card.types";

interface Props {
    cards: RawInfoCardProps[];
}

const Questions: React.FC<Props> = ({ cards }) => {
    return (
        <MainLayout logoText="Питання">
            <S.QuestionsPageContainer>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        cardType="info"
                        isFullWidth
                        id={card.title}
                        title={card.title}
                        subhead={card.subhead}
                        desc={card.desc}
                    />
                ))}
            </S.QuestionsPageContainer>
        </MainLayout>
    );
};

export default Questions;
