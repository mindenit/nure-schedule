import { IAuditorium, ISchedule } from "@nurejs/api";
import { LOCAL_KEYS } from "core/constants";
import { useState } from "react";

export const useAuditoriumsFilter = () => {
    const localFilter = localStorage.getItem(LOCAL_KEYS.AUDITORIUMS_FILTER);
    const defaultFilter = localFilter ? JSON.parse(localFilter) : [];
    const [auditoriumsFilter, setAuditoriumsFilter] =
        useState<IAuditorium[]>(defaultFilter);

    const addAuditoriumsFilter = (item: IAuditorium) => {
        console.log(auditoriumsFilter);
        console.log(item);
        if (!auditoriumsFilter.includes(item)) {
            const updatedFilter = [...auditoriumsFilter, item];

            setAuditoriumsFilter(updatedFilter);
            localStorage.setItem(
                LOCAL_KEYS.AUDITORIUMS_FILTER,
                JSON.stringify(updatedFilter)
            );
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
        localStorage.setItem(
            LOCAL_KEYS.AUDITORIUMS_FILTER,
            JSON.stringify(updatedFilter)
        );
    };

    const resetAuditoriumsFilter = () => {
        setAuditoriumsFilter([]);
        localStorage.removeItem(LOCAL_KEYS.AUDITORIUMS_FILTER);
    };

    return {
        auditoriumsFilter,
        addAuditoriumsFilter,
        applyAuditoriumsFilter,
        resetAuditoriumsFilter,
        removeAuditoriumsFilter,
    };
};
