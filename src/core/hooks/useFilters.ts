import { ISchedule } from "@nurejs/api";
import { useAuditoriumsFilter } from "./useAuditoriumsFilter";
import { useTeachersFilter } from "./useTeachersFilter";
import { pipe } from "core/utils/pipe";

export const useFilters = () => {
    const { applyAuditoriumsFilter } = useAuditoriumsFilter();
    const { applyTeachersFilter } = useTeachersFilter();

    const applyFilters = (events: ISchedule[]) => {
        return pipe(events, applyAuditoriumsFilter(), applyTeachersFilter());
    };

    return { applyFilters };
};
