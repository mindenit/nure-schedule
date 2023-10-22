import { IDay, TRawEvent } from "../../types.js";
import { EventsBuilder } from "../builders/events.builder.js";
import { IDaysTransformer } from "../index.js";
import { DaysTransformer } from "../transformers/index.js";
import { TEventsBuilder, TMonthService, TServiceConfig } from "../types/index.js";

interface IArgs {
	days: IDay[];
	month: number;
	year: number;
}

export class MonthsService<T> implements TMonthService<T> {
	private daysTransformer: IDaysTransformer;
	private eventsBuilder: TEventsBuilder<T>;

	constructor(private config: TServiceConfig<T>) {
		this.daysTransformer = new DaysTransformer(this.config);
		this.eventsBuilder = new EventsBuilder<T>(this.config);
	}

	public getMonth(events: TRawEvent<T>[]) {
		const { date: { month, year } } = this.config;
		const days: IDay[] = [];

		this.#getLastDaysOfMonth({
			days,
			month,
			year,
		});

		this.#getCurrentMonth({
			days,
			month,
			year,
		});

		this.#getFirstDaysOfMonth({
			days,
			month,
			year,
		});

		const daysWithEvents = this.eventsBuilder.addEvents(days, events);

		return daysWithEvents;
	}

	#getCurrentMonth({ days, month, year }: IArgs) {
		const startOfMonth = new Date(year, month, 1);

		while (startOfMonth.getMonth() === month) {
			const date = new Date(startOfMonth);
			days.push(this.daysTransformer.transformDay(date));

			startOfMonth.setDate(startOfMonth.getDate() + 1);
		}
	}

	#getLastDaysOfMonth({ days, month, year }: IArgs) {
		const firstDayOfMonth = new Date(year, month, 1).getDay();

		if (firstDayOfMonth !== 0) {
			const previousMonth = new Date(year, month, 0);
			const startDay = previousMonth.getDate() - firstDayOfMonth + 2;
			const startDate = new Date(year, month - 1, startDay);

			while (startDate.getDate() < previousMonth.getDate()) {
				const date = new Date(startDate);
				days.push(this.daysTransformer.transformDay(date));

				startDate.setDate(startDate.getDate() + 1);
			}

			days.push(this.daysTransformer.transformDay(previousMonth));
		} else {
			const previousMonth = new Date(year, month, 0);
			const startDay = previousMonth.getDate() - 5;
			const startDate = new Date(year, month - 1, startDay);

			while (startDate.getDate() < previousMonth.getDate()) {
				const date = new Date(startDate);
				days.push(this.daysTransformer.transformDay(date));

				startDate.setDate(startDate.getDate() + 1);
			}

			days.push(this.daysTransformer.transformDay(previousMonth));
		}
	}

	#getFirstDaysOfMonth({ days, month, year }: IArgs) {
		const lastDayOfMonth = new Date(year, month + 1, 0).getDay();

		if (lastDayOfMonth !== 7) {
			const nextMonth = new Date(year, month + 1, 1);
			const endDay = nextMonth.getDate() + (7 - lastDayOfMonth) - 1;
			const startDate = new Date(year, month + 1, 1);

			while (startDate.getDate() <= endDay) {
				const date = new Date(startDate);
				days.push(this.daysTransformer.transformDay(date));

				startDate.setDate(startDate.getDate() + 1);
			}
		}
	}
}
