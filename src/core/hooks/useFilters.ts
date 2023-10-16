import { ISchedule } from "@nurejs/api";
import { pipe } from "core/utils/pipe";
import { useAuditoriumsFilter } from "./useAuditoriumsFilter";
import { useSubjectsFilter } from "./useSubjectsFilter";

export const useFilters = () => {
    const { applyAuditoriumsFilter } = useAuditoriumsFilter();
    const { applySubjectsFilter } = useSubjectsFilter();

    const applyFilters = (events: ISchedule[]) => {
        return pipe(events, applyAuditoriumsFilter(), applySubjectsFilter());
    };

    return { applyFilters };
};
