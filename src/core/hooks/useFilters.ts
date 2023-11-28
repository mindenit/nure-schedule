import { ISchedule } from "nurekit";
import { useAuditoriumsFilter } from "./useAuditoriumsFilter";
import { useTeachersFilter } from "./useTeachersFilter";
import { pipe } from "core/utils/pipe";
import { useLessonsFilter } from "./useLessonsFilter";

export const useFilters = () => {
    const { applyAuditoriumFilter } = useAuditoriumsFilter();
    const { applyTeachersFilter } = useTeachersFilter();
    const { applyLessonsFilter } = useLessonsFilter();

    const applyFilters = (events: ISchedule[]) => {
        return pipe(
            events,
            applyAuditoriumFilter(),
            applyTeachersFilter(),
            applyLessonsFilter()
        );
    };

    return { applyFilters };
};
