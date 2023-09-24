import { TitleBig } from "styles/components";
import * as S from "./Card.styles";
import * as C from "styles/components";
import { CardAvatar } from "./CardAvatar/CardAvatar";
import { SubjectType } from "core/types/ui.types";

interface CardDetailsProps {
    avatarColor: string;
    subjectType: string;
}

interface CardProps {
    cardType: "info" | "subject";
}

interface SubjectCardProps extends CardProps {
    startTime: string;
    auditory: string;
    type: SubjectType;
    subjectBrief: string;
    subjectName: string;
}

interface InfoCardProps extends CardProps {
    title: string;
    subhead: string;
    desc: string;
}

const Card: React.FC<CardProps & (SubjectCardProps | InfoCardProps)> = ({
    cardType,
    ...props
}) => {
    return (
        <S.StyledCard>
            {cardType === "subject" ? (
                <SubjectCard {...(props as SubjectCardProps)}></SubjectCard>
            ) : (
                <InfoCard {...(props as InfoCardProps)} />
            )}
        </S.StyledCard>
    );
};

const SubjectCard: React.FC<SubjectCardProps> = ({
    startTime,
    auditory,
    type,
    subjectBrief,
    subjectName,
}) => {
    function getCardDetails(brief: SubjectType): CardDetailsProps {
        switch (brief) {
            case "Лк":
                return { avatarColor: "#5086A4", subjectType: "Лекція" };
            case "Лб":
                return {
                    avatarColor: "#21005D",
                    subjectType: "Лабораторна робота",
                };
            case "Пз":
                return {
                    avatarColor: "#625B71",
                    subjectType: "Практичне заняття",
                };
        }
    }

    const { avatarColor, subjectType } = getCardDetails(type);
    const avatarText: string = subjectBrief.slice(0, 2);

    return (
        <S.StyledCardGrid>
            <CardAvatar letters={avatarText} color={avatarColor} />
            <S.StyledCardText>
                <C.TitleMedium>
                    <b>
                        {startTime} {auditory}
                    </b>{" "}
                    {subjectType}
                </C.TitleMedium>
                <C.TitleBig>{subjectName}</C.TitleBig>
            </S.StyledCardText>
        </S.StyledCardGrid>
    );
};

const InfoCard: React.FC<InfoCardProps> = ({ title, subhead, desc }) => {
    return (
        <>
            <S.InfoCardGroup>
                <TitleBig>{title}</TitleBig>
                <S.InfoCardText>{subhead}</S.InfoCardText>
            </S.InfoCardGroup>
            <S.InfoCardText>{desc}</S.InfoCardText>
        </>
    );
};

export { Card };
