import { TitleBig } from "styles/components";
import * as S from "./Card.styles";
import * as C from "styles/components";
import { CardAvatar } from "./CardAvatar/CardAvatar";

interface CardProps {
    id: string;
    cardType: "info" | "subject";
}

interface SubjectCardProps extends CardProps {
    startTime: string;
    auditory: string;
    type: "Лк" | "Лб" | "Пз";
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
    const formattedTime: string = new Date(
        Number(startTime) * 1000
    ).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

    let avatarColor: string = "";
    let fullType: string = "";
    switch (type) {
        case "Лк":
            avatarColor = "#5086A4";
            fullType = "Лекція";
            break;
        case "Лб":
            avatarColor = "#21005D";
            fullType = "Лабораторна робота";
            break;
        case "Пз":
            avatarColor = "#625B71";
            fullType = "Практичне заняття";
            break;
        default:
            break;
    }
    const avatarText: string = subjectBrief.slice(0, 2);

    return (
        <S.StyledCardGrid>
            <CardAvatar letters={avatarText} color={avatarColor} />
            <S.StyledCardText>
                <C.TitleMedium>
                    <b>
                        {formattedTime} {auditory}
                    </b>{" "}
                    {fullType}
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
