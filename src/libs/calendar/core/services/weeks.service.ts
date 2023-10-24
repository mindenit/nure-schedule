import { TDayWithEvents } from "@onetools/calendar";
import { TRawEvent } from "../../types.js";
import { EventsBuilder } from "../builders/index.js";
import { IDaysTransformer } from "../index.js";
import { DaysTransformer } from "../transformers/days.transformer.js";
import {
    TEventsBuilder,
    TServiceConfig,
    TWeeksService,
} from "../types/index.js";

export class WeeksService<T> implements TWeeksService<T> {
    private daysTransformer: IDaysTransformer;
    private eventsBuilder: TEventsBuilder<T>;

    constructor(private config: TServiceConfig<T>) {
        this.daysTransformer = new DaysTransformer(this.config);
        this.eventsBuilder = new EventsBuilder(this.config);
    }

    public getWeek(events?: TRawEvent<T>[]) {
        const {
            date: { date, month, year },
            events: _events,
        } = this.config;
        const currentDay = date.getDay() === 0 ? 7 : date.getDay();
        const startDay = date.getDate() - currentDay + 1;
        const startWeek = new Date(year, month, startDay);
        const weekDays: TDayWithEvents<T>[] = [];

        for (let i = 1; i <= 7; i++) {
            const date = new Date(startWeek);
            const day = this.eventsBuilder.addEvents(
                this.daysTransformer.transformDay(date),
                events ? events : _events
            );
            weekDays.push(day);

            startWeek.setDate(startWeek.getDate() + 1);
        }

        return weekDays;
    }
}
