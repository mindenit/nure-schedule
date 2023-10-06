import { IGroup } from "@nurejs/api";

export type SubjectType = "Лк" | "Лб" | "Пз";
export type CardType = "info" | "subject" | "group";

export interface CardProps {
    id: string;
    cardType: CardType;
    isFullWidth?: boolean;
}

export interface SubjectCardProps extends CardProps {
    startTime: string;
    auditory: string;
    type: SubjectType;
    subjectBrief: string;
    subjectName: string;
}

export interface InfoCardProps extends CardProps {
    title?: string;
    subhead?: string;
    desc?: string;
}

export interface GroupCardProps extends CardProps {
    group: IGroup;
    onCloseClick: () => void;
    onClick: () => void;
}

export interface CardDetailsProps {
    avatarColor: string;
    subjectType: string;
}

export interface RawInfoCardProps {
    title: string;
    subhead: string;
    desc: string;
}
