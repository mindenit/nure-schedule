function getName(monthNumber: number) {
    const months = [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня",
    ];
    return months[monthNumber - 1];
}

export function formatMonth(
    currentDay: number | string,
    currentMonth: number | string
) {
    if (typeof currentDay === "string") currentDay = Number(currentDay);
    if (typeof currentMonth === "string") currentMonth = Number(currentMonth);
    const monthName = getName(currentMonth);
    return `${currentDay} ${monthName}`;
}
