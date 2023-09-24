export const getMonth = () => {
    let firstDay;
    let lastDay;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfCurrentMonth = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();
    const lastDayOfCurrentMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDay();

    if (firstDayOfCurrentMonth === 0) {
        firstDay = new Date(
            currentYear,
            currentMonth,
            firstDayOfCurrentMonth
        ).toString();
    } else {
        const previousMonth = new Date(currentYear, currentMonth, 0);
        const firstDayofMonth =
            previousMonth.getDate() - firstDayOfCurrentMonth + 2;
        firstDay = new Date(
            currentYear,
            currentMonth - 1,
            firstDayofMonth
        ).toString();
    }

    if (lastDayOfCurrentMonth === 7) {
        lastDay = new Date(
            currentYear,
            currentMonth,
            lastDayOfCurrentMonth
        ).toString();
    } else {
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        const lastDayOfMonth =
            nextMonth.getDate() + (7 - lastDayOfCurrentMonth) - 1;
        lastDay = new Date(
            currentYear,
            currentMonth + 1,
            lastDayOfMonth
        ).toString();
    }

    return { firstDay, lastDay };
};
