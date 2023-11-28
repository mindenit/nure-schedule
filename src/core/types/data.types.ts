import { IAuditorium, IGroup, ITeacher } from "nurekit";

export interface ICommonData {
    id: number;
    name: string;
    type?: "auditorium" | "group" | "teacher" | undefined;
    fullName?: string;
}

interface IBase {
    lastRequest: null | unknown;
    isActive: boolean;
}

export interface IGroupExtended extends IGroup, IBase {
    type?: "group";
}
export interface ITeacherExtended extends ITeacher, IBase {
    type?: "teacher";
}
export interface IAuditoriumExtended extends IAuditorium, IBase {
    type?: "auditorium";
}

export function adaptTeacher(teacher: ITeacher): ICommonData {
    return {
        id: teacher.id,
        name: teacher.shortName,
        type: "teacher",
        fullName: teacher.fullName,
    };
}
