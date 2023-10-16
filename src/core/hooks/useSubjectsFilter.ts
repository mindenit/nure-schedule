import { ISchedule } from "@nurejs/api";
import { useState } from "react";

const KEY = "subjects_filter";

export const useSubjectsFilter = () => {
    const localFilter = localStorage.getItem(KEY);
    const defaultFilter = localFilter ? JSON.parse(localFilter) : [];
    const [subjectsFilter, setSubjectsFilter] =
        useState<number[]>(defaultFilter);

    const addSubjectsFilter = (item: number) => {
        if (subjectsFilter.includes(item)) {
            const updatedFilter = [...subjectsFilter, item];

            setSubjectsFilter(updatedFilter);
            localStorage.setItem(KEY, JSON.stringify(updatedFilter));
        } else {
            const updatedFilter = subjectsFilter.filter((subject) => {
                return subject !== item;
            });

            setSubjectsFilter(updatedFilter);
            localStorage.setItem(KEY, JSON.stringify(updatedFilter));
        }
    };

    const applySubjectsFilter = () => (events: ISchedule[]) => {
        return events.filter((event) => {
            return !subjectsFilter.includes(event.subject.id);
        });
    };

    const resetSubjectsFIlter = () => {
        setSubjectsFilter([]);
        localStorage.removeItem(KEY);
    };

    return {
        subjectsFilter,
        addSubjectsFilter,
        applySubjectsFilter,
        resetSubjectsFIlter,
    };
};
