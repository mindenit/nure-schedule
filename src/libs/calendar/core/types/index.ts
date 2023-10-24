import {
    IDate,
    IDay,
    IFormatter,
    TDayWithEvents,
    TEvent,
    TRawEvent,
} from "../../types.js";

type TServiceConfig<T> = {
    locale: string;
    events: TRawEvent<T>[];
    formatter: IFormatter;
    date: IDate;
    timezone: string;
};

type TBuilderConfig = {
    locale: string;
    timezone: string;
    formatter: IFormatter;
};

type TEventsBuilder<T> = {
    addEvents: (days: IDay, events: TRawEvent<T>[]) => TDayWithEvents<T>;
};

type TMonthService<T> = {
    getMonth: (events?: TRawEvent<T>[]) => TDayWithEvents<T>[];
};

type TWeeksService<T> = {
    getWeek: (events?: TRawEvent<T>[]) => TDayWithEvents<T>[];
};

type TDaysService<T> = {
    getDay: (events?: TRawEvent<T>[]) => TDayWithEvents<T>[];
};

type TEventsTransformer<T> = {
    transformEvents: (events: TRawEvent<T>[]) => TEvent<T>[];
};

export type {
    TServiceConfig,
    TBuilderConfig,
    TEventsBuilder,
    TMonthService,
    TWeeksService,
    TDaysService,
    TEventsTransformer,
};
