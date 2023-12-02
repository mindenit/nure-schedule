import { Button } from "components/ui/Button";
import { List } from "components/ui/List";
import { Loader } from "components/ui/Loader";
import { usePagination } from "core/hooks/usePagination";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import { RootState } from "core/store/store";
import { searchItems } from "core/utils/searchItems";
import { FC, Fragment, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import * as S from "../styles";
import { ICommonData } from "core/types/data.types";

export interface TeachersViewProps {
    query: string;
    loading: boolean;
    error: Error | undefined;
}

export const TeachersView: FC<TeachersViewProps> = memo(
    ({ loading, error, query }) => {
        const { teachers } = useSelector(
            (state: RootState) => state.fetchTeachers
        );
        const { teachersFilter, addTeacherInFilter, removeTeacherFromFilter } =
            useTeachersFilter();
        const { displayedItems, loadMore, showButton } = usePagination(
            searchItems(teachers, query, (el) => el.fullName as string)
        );

        const handleClick = useCallback(
            (teacher: ICommonData) => {
                if (teachersFilter.includes(teacher)) {
                    removeTeacherFromFilter(teacher);
                } else {
                    addTeacherInFilter(teacher);
                }
            },
            [teachersFilter, addTeacherInFilter, removeTeacherFromFilter]
        );

        return (
            <Fragment>
                {loading && <Loader />}
                {error !== undefined && (
                    <div>Сталася помилка: {error.message}</div>
                )}
                <List.Root>
                    {displayedItems.map((teacher) => (
                        <List.Item
                            key={teacher.id}
                            checked={teachersFilter.includes(teacher)}
                            onClick={() => handleClick(teacher)}
                        >
                            {teacher.fullName}
                        </List.Item>
                    ))}
                    {showButton && (
                        <S.StyledButtonCont>
                            <Button variant="outlined" onClick={loadMore}>
                                Завантажити ще
                            </Button>
                        </S.StyledButtonCont>
                    )}
                </List.Root>
            </Fragment>
        );
    }
);
