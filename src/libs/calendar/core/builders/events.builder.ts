import { IDay, TDayWithEvents, TEvent, TRawEvent } from "../../types.js";
import {
	ITimestampTransformer,
} from "../interfaces/index.js";
import { EventsTransformer } from "../transformers/events.transformer.js";
import { TimestampTransformer } from "../transformers/timestamp.adapter.js";
import { TBuilderConfig, TEventsBuilder, TEventsTransformer } from "../types/index.js";

export class EventsBuilder<T> implements TEventsBuilder<T> {
	private timestampTransformer: ITimestampTransformer;
	private eventsTransformer: TEventsTransformer<T>;

	constructor(private config: TBuilderConfig) {
		this.timestampTransformer = new TimestampTransformer(this.config);
		this.eventsTransformer = new EventsTransformer(this.config);
	}

	addEvents(days: IDay[], events: TRawEvent<T>[]): TDayWithEvents<T>[] {
		return days.map((day) => {
			return { ...day, events: this.#getDayEvents(day.day, day.month, events) };
		});
	}

	#getDayEvents(day: string, month: string, events: TRawEvent<T>[]): TEvent<T>[] {
		const dayEvents = events.filter((event) => {
			const eventDay = this.timestampTransformer.toDay(event.startTime);
			const eventMonth = this.timestampTransformer.toMonth(event.startTime);

			return eventDay === day && eventMonth === month;
		})

    const trasformedEvents = this.eventsTransformer.transformEvents(dayEvents);

		return trasformedEvents;
	}
}
