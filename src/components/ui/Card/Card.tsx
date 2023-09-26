import * as S from "./Card.styles";
import * as C from "styles/components";

import { CardAvatar } from "./CardAvatar/CardAvatar";

import { Close } from "@mui/icons-material";

import {
    CardProps,
    SubjectCardProps,
    InfoCardProps,
    GroupCardProps,
} from "core/types/card.types";

import { formatTime, getCardDetails } from "core/utils";

const Card: React.FC<
    CardProps & (SubjectCardProps | InfoCardProps | GroupCardProps)
> = ({ cardType, ...props }) => {
    return (
        <S.StyledCard>
            {cardType === "subject" && (
                <SubjectCard {...(props as SubjectCardProps)}></SubjectCard>
            )}
            {cardType === "info" && <InfoCard {...(props as InfoCardProps)} />}
            {cardType === "group" && (
                <GroupCard {...(props as GroupCardProps)} />
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
    const formattedTime = formatTime(startTime);
    const { avatarColor, subjectType } = getCardDetails(type);
    const avatarText: string = subjectBrief.slice(0, 2);

    return (
        <S.StyledCardGrid>
            <CardAvatar letters={avatarText} color={avatarColor} />
            <S.StyledCardText>
                <C.TitleMedium>
                    <b>
                        {formattedTime} {auditory}
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
