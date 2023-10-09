// dateUtils.js

function getMonthName(monthNumber: number) {
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

export function formatMonth(currentMonth: number, currentDay: number) {
    const monthName = getMonthName(currentMonth);
    return `${currentDay} ${monthName}`;
}
