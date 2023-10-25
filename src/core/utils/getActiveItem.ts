import { IAuditorium, IGroup, ITeacher } from "@nurejs/api";

interface IArgs {
    activeTeacher: ITeacher | null;
    activeGroup: IGroup | null;
    activeAuditorium: IAuditorium | null;
}

export const getActiveItem = ({
    activeGroup,
    activeTeacher,
    activeAuditorium,
}: IArgs) => {
    if (activeGroup !== null) return { type: "group", name: activeGroup.name };
    if (activeTeacher !== null)
        return { type: "teacher", name: activeTeacher.fullName };
    if (activeAuditorium !== null)
        return { type: "auditorium", name: activeAuditorium.name };

    return { type: "group", name: null };
};
