import { ISchedule } from "@nurejs/api";
import { RootState } from "core/store/store";
import { useSelector } from "react-redux";
import { useActions } from "./useActions";

export const useAuditoriumsFilter = () => {
    const { auditoriumsFilter } = useSelector(
        (state: RootState) => state.filter
    );
    const { addAuditoriumInFilter, removeAuditoriumFromFilter } = useActions();

    const applyAuditoriumFilter = () => (events: ISchedule[]) => {
        return events.filter((event) => {
            return !auditoriumsFilter
                .map((auditorium) => auditorium.name)
                .includes(event.auditorium);
        });
    };

    return {
        auditoriumsFilter,
        applyAuditoriumFilter,
        addAuditoriumInFilter,
        removeAuditoriumFromFilter,
    };
};
