import { ComponentPropsWithoutRef } from "react";
import { IGroup, ITeacher } from "@nurejs/api";

export type SubjectType = "Лк" | "Лб" | "Пз";
export type SubjectTypeExtended =
    | "Лекція"
    | "Лабораторна робота"
    | "Практичне заняття";
export type CardType = "info" | "subject" | "subjectText" | "group";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
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

export interface SubjectTextCardProps extends CardProps {
    weekday: string;
    date: string;
    startTime: string;
    subjectType: SubjectType | SubjectTypeExtended;
    subjectName: string;
    auditory: string;
    teacher: ITeacher[];
    groups: IGroup[];
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
    title?: string;
    subhead?: string;
    desc?: string;
}
