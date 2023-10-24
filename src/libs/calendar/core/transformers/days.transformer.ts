import { IDay } from "../../types.js";
import { IDaysTransformer, ITrasnformerConfig } from "../index.js";
import { capitalize } from "../utils/string.js";

export class DaysTransformer implements IDaysTransformer {
	constructor(private config: ITrasnformerConfig) {}

	transformDay(date: Date): IDay {
		const { locale, formatter } = this.config;
		const currentDate = new Date();

		const day = date.toLocaleString(locale, {
			day: formatter.days
		});
		const weekday = date.toLocaleString(locale, {
			weekday: formatter.weekdays
		});
		const month = date.toLocaleString(locale, {
			month: formatter.months
		});
		const year = date.toLocaleString(locale, {
			year: formatter.years
		});

		return {
			day,
			weekday: capitalize(weekday),
			month: capitalize(month),
			year,
			isCurrentDay: date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth(),
			isCurrentMonth: date.getMonth() === currentDate.getMonth(),
		};
	}
}
