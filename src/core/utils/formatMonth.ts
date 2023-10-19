import { LOCALE } from "core/constants";

export function formatMonth(day: string, month: string, year: string) {
    const date = new Date(+day, +month, +year);
    const localizedMonth = date.toLocaleString(LOCALE, { month: "long" });

    return `${day} ${localizedMonth}`;
}
