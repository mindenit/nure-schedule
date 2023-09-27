import { IGroup } from "@nurejs/api";

export type SubjectType = "Лк" | "Лб" | "Пз";

export interface CardProps {
    id: string;
    cardType: "info" | "subject" | "group";
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
