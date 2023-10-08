import { useState } from "react";

import { List } from "components/ui/List";
import { Button } from "components/ui/Button";

import * as S from "./ListViews.styles";
import { Loader } from "components/ui/Loader";

interface ListViewProps<T> {
    items: T[];
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
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 20;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayed = items.slice(0, endIndex);

    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const loadMore = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <List.Root>
            {loading && <Loader />}
            {error !== undefined && <div>Сталася помилка: {error.message}</div>}
            {displayed.map((item, index) => (
                <List.Item key={index} onClick={() => onItemClick(item)}>
                    <List.Header>{renderItem(item)}</List.Header>
                </List.Item>
            ))}

            {currentPage < totalPages && (
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
