import { RootState } from "core/store/store";
import { ISchedule } from "nurekit";
import { useSelector } from "react-redux";
import { useActions } from "./useActions";

export const useLessonsFilter = () => {
    const { lessonsFilter } = useSelector((state: RootState) => state.filter);

    const { addLessonToFilter, removeLessonFromFilter } = useActions();

    const applyLessonsFilter = () => (events: ISchedule[]) => {
        const exclusionArray = lessonsFilter.map((item) => item.type);

        return events.filter((event) => {
            return !exclusionArray.includes(event.type);
        });
    };

    return {
        lessonsFilter,
        applyLessonsFilter,
        addLessonToFilter,
        removeLessonFromFilter,
    };
};
