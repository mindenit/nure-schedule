export function searchItems<T>(
    items: T[],
    query: string,
    propertyFn: (item: T) => string
) {
    const trimmedQuery = query.trim();

    return items.filter((item) => {
        if (trimmedQuery === "") {
            return true;
        }

        const propertyValue = propertyFn(item).toLowerCase();

        return propertyValue.includes(trimmedQuery.toLowerCase());
    });
}
