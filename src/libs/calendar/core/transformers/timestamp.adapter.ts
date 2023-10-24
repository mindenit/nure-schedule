import { ITimestampTransformer, ITrasnformerConfig } from "../interfaces/index.js";
import { capitalize } from "../utils/string.js";

export class TimestampTransformer implements ITimestampTransformer {
	constructor(private config: ITrasnformerConfig) {}

	public toString(date: number) {
		const { locale, formatter, timezone } = this.config

		const stringDate = this.#toDate(date);
		const day = stringDate.toLocaleTimeString(locale, {
			hour: formatter.hours,
			minute: formatter.minutes,
			timeZone: timezone,
		});

		return day;
	}

	public toDay(date: number) {
		const { locale, formatter } = this.config

		const stringDate = this.#toDate(date);
		const day = stringDate.toLocaleDateString(locale, { day: formatter.days });

		return day;
	}

	public toMonth(date: number) {
		const { locale, formatter } = this.config

		const stringDate = this.#toDate(date);
		const month = stringDate.toLocaleDateString(locale, { month: formatter.months });

		return capitalize(month);
	}

	#toDate(date: number) {
		const stringDate = new Date(date * 1000);

		return stringDate;
	}
}
