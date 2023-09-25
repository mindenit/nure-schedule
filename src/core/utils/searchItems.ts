export function searchItems<T>(
    items: T[],
    query: string,
    propertyFn: (item: T) => string
) {
    return items.filter((item) => {
        if (query === "") {
            return true;
        }
        const propertyValue = propertyFn(item).toLowerCase();
        return propertyValue.includes(query.toLowerCase());
    });
}
