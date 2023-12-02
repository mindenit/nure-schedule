import { ComponentPropsWithoutRef } from "react";
import { IGroup } from "nurekit";
import { ICommonData } from "./data.types";
import { SubjectType } from "./ui.types";
export type CardType = "info" | "subject" | "subjectText" | "group";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
    id: string;
    cardType: CardType;
    isFullWidth?: boolean;
}

export interface SubjectCardProps extends CardProps {
    startTime: string;
    endTime: string;
    auditory: string;
    type: SubjectType;
    subjectBrief: string;
    subjectName: string;
}

export interface SubjectTextCardProps extends CardProps {
    weekday: string;
    date: string;
    startTime: string;
    subjectType: SubjectType;
    subjectName: string;
    auditory: string;
    teacher: ICommonData[];
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
