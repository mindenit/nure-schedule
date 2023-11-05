import { LOCALE } from "core/constants";
import { capitalize } from "./capitlize";

export function getMonthName(): string {
    const currentDate = new Date();

    return capitalize(currentDate.toLocaleString(LOCALE, { month: "long" }));
}
