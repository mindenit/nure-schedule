import { ISchedule, ITeacher } from "@nurejs/api";
import { LOCAL_KEYS } from "core/constants";
import { useState } from "react";

export const useTeachersFilter = () => {
    const localFilter = localStorage.getItem(LOCAL_KEYS.TEACHERS_FILTER);
    const defaultFilter = localFilter ? JSON.parse(localFilter) : [];
    const [teachersFilter, setTeachersFilter] =
        useState<ITeacher[]>(defaultFilter);

    const addTeachersFilter = (item: ITeacher): void => {
        if (!teachersFilter.includes(item)) {
            const updatedFilter = [...teachersFilter, item];

            setTeachersFilter(updatedFilter);
            localStorage.setItem(
                LOCAL_KEYS.TEACHERS_FILTER,
                JSON.stringify(updatedFilter)
            );
        } else {
            removeTeacherFilter(item);
        }
    };

    const applyTeachersFilter = () => (events: ISchedule[]) => {
        const exclusionSet = new Set(teachersFilter.map((item) => item.id));

        return events.filter((event) => {
            return event.teachers.some((teacher) => {
                return !exclusionSet.has(teacher.id);
            });
        });
    };

    const resetTeachersFilter = () => {
        setTeachersFilter([]);
        localStorage.removeItem(LOCAL_KEYS.TEACHERS_FILTER);
    };

    const removeTeacherFilter = (item: ITeacher) => {
        const updatedFilter = teachersFilter.filter((teacher) => {
            return teacher !== item;
        });

        setTeachersFilter(updatedFilter);
        localStorage.setItem(
            LOCAL_KEYS.TEACHERS_FILTER,
            JSON.stringify(updatedFilter)
        );
    };

    return {
        teachersFilter,
        addTeachersFilter,
        resetTeachersFilter,
        removeTeacherFilter,
        applyTeachersFilter,
    };
};
