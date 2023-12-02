import { ISchedule } from "nurekit";
import { RootState } from "core/store/store";
import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { useCallback } from "react";

export const useLessonsFilter = () => {
    const { lessonsFilter } = useSelector((state: RootState) => state.filter);

    const { addLessonToFilter, removeLessonFromFilter } = useActions();

    const applyLessonsFilter = useCallback(
        () => (events: ISchedule[]) => {
            const exclusionArray = lessonsFilter.map((item) => item.type);

            return events.filter((event) => {
                return !exclusionArray.includes(event.type);
            });
        },
        [lessonsFilter]
    );

    return {
        lessonsFilter,
        applyLessonsFilter,
        addLessonToFilter,
        removeLessonFromFilter,
    };
};
