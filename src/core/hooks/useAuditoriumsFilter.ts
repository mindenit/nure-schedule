import { IAuditorium, ISchedule } from "@nurejs/api";
import { useState } from "react";

const KEY = "auditoriums_filter";

export const useAuditoriumsFilter = () => {
    const localFilter = localStorage.getItem(KEY);
    const defaultFilter = localFilter ? JSON.parse(localFilter) : [];
    const [auditoriumsFilter, setAuditoriumsFilter] =
        useState<IAuditorium[]>(defaultFilter);

    const addAuditoriumsFilter = (item: IAuditorium) => {
        console.log(auditoriumsFilter);
        console.log(item);
        if (!auditoriumsFilter.includes(item)) {
            const updatedFilter = [...auditoriumsFilter, item];

            setAuditoriumsFilter(updatedFilter);
            localStorage.setItem(KEY, JSON.stringify(updatedFilter));
        } else {
            removeAuditoriumsFilter(item);
        }
    };

    const applyAuditoriumsFilter = () => (events: ISchedule[]) => {
        return events.filter((event) => {
            return !auditoriumsFilter
                .map((auditorium) => auditorium.name)
                .includes(event.auditorium);
        });
    };

    const removeAuditoriumsFilter = (item: IAuditorium) => {
        const updatedFilter = auditoriumsFilter.filter((auditorium) => {
            return auditorium !== item;
        });

        setAuditoriumsFilter(updatedFilter);
        localStorage.setItem(KEY, JSON.stringify(updatedFilter));
    };

    const resetAuditoriumsFilter = () => {
        setAuditoriumsFilter([]);
        localStorage.removeItem(KEY);
    };

    return {
        auditoriumsFilter,
        addAuditoriumsFilter,
        applyAuditoriumsFilter,
        resetAuditoriumsFilter,
        removeAuditoriumsFilter,
    };
};
