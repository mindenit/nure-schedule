import { RootState } from "core/store/store";
import { ISchedule } from "nurekit";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useActions } from "./useActions";

export const useTeachersFilter = () => {
    const { teachersFilter } = useSelector((state: RootState) => state.filter);

    const { addTeacherInFilter, removeTeacherFromFilter } = useActions();

    const applyTeachersFilter = useCallback(
        () => (events: ISchedule[]) => {
            const exclusionSet = new Set(teachersFilter.map((item) => item.id));

            return events.filter((event) => {
                if (event.teachers.length === 0) {
                    return event;
                }

                return event.teachers.some((teacher) => {
                    return !exclusionSet.has(teacher.id);
                });
            });
        },
        [teachersFilter]
    );

    return {
        teachersFilter,
        applyTeachersFilter,
        removeTeacherFromFilter,
        addTeacherInFilter,
    };
};
