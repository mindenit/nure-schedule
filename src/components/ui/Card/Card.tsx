import * as C from "styles/components";
import * as S from "./Card.styles";

import { CardAvatar } from "./CardAvatar/CardAvatar";

import { Close } from "@mui/icons-material";

import {
    CardProps,
    GroupCardProps,
    InfoCardProps,
    SubjectCardProps,
    SubjectTextCardProps,
} from "core/types/card.types";

import { getCardDetails } from "core/utils";
import { IGroup } from "@nurejs/api";

const Card: React.FC<
    CardProps &
        (
            | SubjectCardProps
            | SubjectTextCardProps
            | InfoCardProps
            | GroupCardProps
        )
> = ({ cardType, isFullWidth = false, ...props }) => {
    return (
        <>
            {cardType === "subject" && (
                <S.StyledCard isFullWidth={isFullWidth}>
                    <SubjectCard {...(props as SubjectCardProps)} />
                </S.StyledCard>
            )}
            {cardType === "info" && (
                <S.StyledCard isFullWidth={isFullWidth}>
                    <InfoCard {...(props as InfoCardProps)} />
                </S.StyledCard>
            )}
            {cardType === "group" && (
                <S.StyledCard isFullWidth={isFullWidth}>
                    <GroupCard {...(props as GroupCardProps)} />
                </S.StyledCard>
            )}
            {cardType === "subjectText" && (
                <S.StyledTextCard>
                    <SubjectCardText {...(props as SubjectTextCardProps)} />
                </S.StyledTextCard>
            )}
        </>
    );
};

const SubjectCard: React.FC<SubjectCardProps> = ({
    startTime,
    auditory,
    type,
    subjectBrief,
    subjectName,
}) => {
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

const SubjectCardText: React.FC<SubjectTextCardProps> = ({
    weekday,
    date,
    startTime,
    subjectType,
    subjectName,
    auditory,
    teacher,
    groups,
}) => {
    return (
        <S.StyledSubjectTextCardContainer>
            <C.TitleLight>
                {weekday} {date} {startTime}. {subjectType}
            </C.TitleLight>
            <C.TitleBig>{subjectName}</C.TitleBig>
            <C.TitleMedium>Авдиторія: {auditory}</C.TitleMedium>
            <C.TitleMedium>
                Викладач(-і):{" "}
                {teacher.map((t) => (
                    <span>{t.fullName}</span>
                ))}
            </C.TitleMedium>
            <C.TitleMedium>
                Група(-и):{" "}
                {groups.map((group: IGroup) => (
                    <span key={group.id}>{group.name}</span>
                ))}
            </C.TitleMedium>
        </S.StyledSubjectTextCardContainer>
    );
};

const InfoCard: React.FC<InfoCardProps> = ({ title, subhead, desc }) => {
    return (
        <>
            <S.InfoCardGroup>
                <C.TitleBig>{title}</C.TitleBig>
                <S.InfoCardText>{subhead}</S.InfoCardText>
            </S.InfoCardGroup>
            <S.InfoCardText>{desc}</S.InfoCardText>
        </>
    );
};

const GroupCard: React.FC<GroupCardProps> = ({
    group,
    onCloseClick,
    onClick,
}) => {
    return (
        <S.StyledCardGroupContainer>
            <C.TitleBig onClick={onClick}>{group.name}</C.TitleBig>
            <Close onClick={onCloseClick}></Close>
        </S.StyledCardGroupContainer>
    );
};

export { Card };
