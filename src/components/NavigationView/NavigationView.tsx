import { Button } from "components/ui/Button";
import { NavigationDrawer } from "components/ui/NavigationDrawer";

import { Loader } from "components/ui/Loader";
import { usePagination } from "core/hooks/usePagination";
import * as S from "./Navigation.styles";
import * as C from "../../styles/components";

interface NavigationViewProps<T> {
    items: (T & { id: number })[];
    renderItem: (item: T) => React.ReactNode;
    loading: boolean;
    error: Error | undefined;
    onItemClick: (item: T) => void;
}

function NavigationView<T>({
    items,
    renderItem,
    loading,
    error,
    onItemClick,
}: NavigationViewProps<T>): JSX.Element {
    const { displayedItems, loadMore, showButton } = usePagination(items);

    return (
        <NavigationDrawer.Root>
            {loading && <Loader />}
            {error !== undefined && <div>Сталася помилка: {error.message}</div>}
            {!displayedItems.length && (
                <S.StyledEmptyFallback>
                    <C.TitleMedium>
                        Елементів з таким іменем не знайдено
                    </C.TitleMedium>
                </S.StyledEmptyFallback>
            )}
            {displayedItems.map((item) => (
                <NavigationDrawer.Item
                    key={item.id}
                    onClick={() => onItemClick(item)}
                >
                    <NavigationDrawer.Header>
                        {renderItem(item)}
                    </NavigationDrawer.Header>
                </NavigationDrawer.Item>
            ))}

            {showButton && (
                <S.StyledButtonCont>
                    <Button variant="outlined" onClick={loadMore}>
                        Завантажити ще
                    </Button>
                </S.StyledButtonCont>
            )}
        </NavigationDrawer.Root>
    );
}

export { NavigationView };
