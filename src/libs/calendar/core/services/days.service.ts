import { TRawEvent } from "../../types.js";
import { EventsBuilder } from "../builders/events.builder.js";
import { IDaysTransformer } from "../interfaces/index.js";
import { DaysTransformer } from "../transformers/days.transformer.js";
import {
    TDaysService,
    TEventsBuilder,
    TServiceConfig,
} from "../types/index.js";

export class DaysService<T> implements TDaysService<T> {
    private daysTransformer: IDaysTransformer;
    private eventsBuilder: TEventsBuilder<T>;

    constructor(private config: TServiceConfig<T>) {
        this.daysTransformer = new DaysTransformer(this.config);
        this.eventsBuilder = new EventsBuilder(this.config);
    }

    public getDay(events?: TRawEvent<T>[]) {
        const {
            date: { date },
            events: _events,
        } = this.config;
        const day = this.daysTransformer.transformDay(date);

        const dayWithEvents = this.eventsBuilder.addEvents(
            day,
            events ? events : _events
        );

        return [dayWithEvents];
    }
}
