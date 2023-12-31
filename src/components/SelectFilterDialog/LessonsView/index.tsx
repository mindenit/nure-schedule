import { List } from "components/ui/List";
import { LESSONS_TYPE } from "core/constants";
import { useLessonsFilter } from "core/hooks/useLessonsFilter";
import { ILessonFilter } from "core/interfaces/filters.interface";

export const LessonsView = () => {
    const { lessonsFilter, addLessonToFilter, removeLessonFromFilter } =
        useLessonsFilter();

    const handleClick = (lesson: ILessonFilter) => {
        if (lessonsFilter.includes(lesson)) {
            removeLessonFromFilter(lesson);
        } else {
            addLessonToFilter(lesson);
        }
    };

    return (
        <List.Root>
            {LESSONS_TYPE.map((lesson) => (
                <List.Item
                    key={lesson.name}
                    checked={lessonsFilter.includes(lesson)}
                    onClick={() => handleClick(lesson)}
                >
                    {lesson.name}
                </List.Item>
            ))}
        </List.Root>
    );
};
