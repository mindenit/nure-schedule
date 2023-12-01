import { useCallback, useState } from "react";

export function usePagination<T>(items: T[]) {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 20;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedItems = items.slice(0, endIndex);

    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const showButton = currentPage < totalPages;

    const loadMore = useCallback(() => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }, [currentPage, totalPages]);

    return { displayedItems, loadMore, showButton };
}
