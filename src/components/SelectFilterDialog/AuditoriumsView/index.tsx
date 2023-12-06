import { Button } from "components/ui/Button";
import { List } from "components/ui/List";
import { Loader } from "components/ui/Loader";
import { useAuditoriumsFilter } from "core/hooks/useAuditoriumsFilter";
import { usePagination } from "core/hooks/usePagination";
import { RootState } from "core/store/store";
import { ICommonData } from "core/types/data.types";
import { searchItems } from "core/utils/searchItems";
import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import * as C from "../../../styles/components";
import * as S from "../styles";

interface AuditoriumsViewProps {
    query: string;
    loading: boolean;
    error: Error | undefined;
}

export const AuditoriumsView: FC<AuditoriumsViewProps> = ({
    loading,
    error,
    query,
}) => {
    const { auditoriums } = useSelector(
        (state: RootState) => state.fetchAuditoriums
    );
    const {
        auditoriumsFilter,
        addAuditoriumInFilter,
        removeAuditoriumFromFilter,
    } = useAuditoriumsFilter();
    const { displayedItems, loadMore, showButton } = usePagination(
        searchItems(auditoriums, query, (el) => el.name)
    );

    const handleClick = (auditorium: ICommonData) => {
        if (auditoriumsFilter.includes(auditorium)) {
            removeAuditoriumFromFilter(auditorium);
        } else {
            addAuditoriumInFilter(auditorium);
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
                {displayedItems.map((auditorium) => (
                    <List.Item
                        key={auditorium.id}
                        checked={auditoriumsFilter.includes(auditorium)}
                        onClick={() => handleClick(auditorium)}
                    >
                        {auditorium.name}
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
