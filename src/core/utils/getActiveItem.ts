import { IGroup, ITeacher } from "@nurejs/api";

interface IArgs {
    activeTeacher: ITeacher;
    activeGroup: IGroup;
}

export const getActiveItem = ({ activeGroup, activeTeacher }: IArgs) => {
    if (activeGroup !== null) {
        return { type: "group", name: activeGroup.name.toLowerCase() };
    }

    if (activeTeacher !== null) {
        return { type: "teacher", name: activeTeacher.shortName };
    }
};
