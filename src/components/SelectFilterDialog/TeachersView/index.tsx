import { Button } from "components/ui/Button";
import { List } from "components/ui/List";
import { Loader } from "components/ui/Loader";
import { usePagination } from "core/hooks/usePagination";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import { RootState } from "core/store/store";
import { ICommonData } from "core/types/data.types";
import { searchItems } from "core/utils/searchItems";
import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import * as C from "../../../styles/components";
import * as S from "../styles";

export interface TeachersViewProps {
    query: string;
    loading: boolean;
    error: Error | undefined;
}

export const TeachersView: FC<TeachersViewProps> = ({
    loading,
    error,
    query,
}) => {
    const { teachers } = useSelector((state: RootState) => state.fetchTeachers);
    const { teachersFilter, addTeacherInFilter, removeTeacherFromFilter } =
        useTeachersFilter();
    const { displayedItems, loadMore, showButton } = usePagination(
        searchItems(teachers, query, (el) => el.fullName as string)
    );

    const handleClick = (teacher: ICommonData) => {
        if (teachersFilter.includes(teacher)) {
            removeTeacherFromFilter(teacher);
        } else {
            addTeacherInFilter(teacher);
        }
    };

    return (
        <Fragment>
            {loading && <Loader />}
            {error !== undefined && <div>Сталася помилка: {error.message}</div>}
            {!displayedItems.length && (
                <S.StyledEmptyFallback>
                    <C.TitleMedium>
                        Елементів з таким іменем не знайдено
                    </C.TitleMedium>
                </S.StyledEmptyFallback>
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
};
