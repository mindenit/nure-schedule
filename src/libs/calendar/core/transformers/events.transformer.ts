import { TEvent, TRawEvent } from "../../types.js";
import {
	ITimestampTransformer,
	ITrasnformerConfig,
} from "../interfaces/index.js";
import { TEventsTransformer } from "../types/index.js";
import { TimestampTransformer } from "./timestamp.adapter.js";

export class EventsTransformer<T> implements TEventsTransformer<T> {
	private timestampAdapter: ITimestampTransformer;
	constructor(private config: ITrasnformerConfig) {
		this.timestampAdapter = new TimestampTransformer(this.config);
	}

	transformEvents(events: TRawEvent<T>[]) {
		const transformedEvents: TEvent<T>[] = [];

		for (const event of events) {
			transformedEvents.push({
				...event,
				startTime: this.timestampAdapter.toString(event.startTime),
				endTime: this.timestampAdapter.toString(event.endTime),
			})
		}

		return transformedEvents;
	}
}
