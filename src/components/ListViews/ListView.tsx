import { Button } from "components/ui/Button";
import { List } from "components/ui/List";

import { Loader } from "components/ui/Loader";
import { usePagination } from "core/hooks/usePagination";
import * as S from "./ListViews.styles";

interface ListViewProps<T> {
    items: (T & { id: number })[];
    renderItem: (item: T) => React.ReactNode;
    loading: boolean;
    error: Error | undefined;
    onItemClick: (item: T) => void;
}

function ListView<T>({
    items,
    renderItem,
    loading,
    error,
    onItemClick,
}: ListViewProps<T>): JSX.Element {
    const { displayedItems, loadMore, showButton } = usePagination(items);

    return (
        <List.Root>
            {loading && <Loader />}
            {error !== undefined && <div>Сталася помилка: {error.message}</div>}
            {displayedItems.map((item) => (
                <List.Item key={item.id} onClick={() => onItemClick(item)}>
                    <List.Header>{renderItem(item)}</List.Header>
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
    );
}

export { ListView };
