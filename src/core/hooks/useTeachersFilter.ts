import { ISchedule, ITeacher } from "@nurejs/api";
import { useState } from "react";

const KEY = "teachers_filter";

export const useTeachersFilter = () => {
    const localFilter = localStorage.getItem(KEY);
    const defaultFilter = localFilter ? JSON.parse(localFilter) : [];
    const [teachersFilter, setTeachersFilter] =
        useState<ITeacher[]>(defaultFilter);

    const addTeachersFilter = (item: ITeacher): void => {
        if (!teachersFilter.includes(item)) {
            const updatedFilter = [...teachersFilter, item];

            setTeachersFilter(updatedFilter);
            localStorage.setItem(KEY, JSON.stringify(updatedFilter));
        } else {
            removeTeacherFilter(item);
        }
    };

    const applyTeachersFilter = () => (events: ISchedule[]) => {
        return events.filter((event) => {
            return event.teachers.some((teacher) => {
                return !teachersFilter.includes(teacher);
            });
        });
    };

    const resetTeachersFilter = () => {
        setTeachersFilter([]);
        localStorage.removeItem(KEY);
    };

    const removeTeacherFilter = (item: ITeacher) => {
        const updatedFilter = teachersFilter.filter((teacher) => {
            return teacher !== item;
        });

        setTeachersFilter(updatedFilter);
        localStorage.setItem(KEY, JSON.stringify(updatedFilter));
    };

    return {
        teachersFilter,
        addTeachersFilter,
        resetTeachersFilter,
        removeTeacherFilter,
        applyTeachersFilter,
    };
};
