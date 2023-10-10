export function getMonthName(): string {
    const monthsUkrainian: string[] = [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
    ];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    return monthsUkrainian[currentMonth];
}
