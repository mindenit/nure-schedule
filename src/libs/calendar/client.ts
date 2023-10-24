import {
    DaysService,
    MonthsService,
    TDaysService,
    TMonthService,
    TWeeksService,
    WeeksService,
} from "./core";
import { getCurrentDate } from "./core/utils/date";
import { getFormatter } from "./core/utils/formatter";
import { capitalize } from "./core/utils/string";
import { IDate, IFormatter, TDayWithEvents, TRawEvent, TView } from "./types";

type TCoreConfig<T> = {
    locale: string;
    events: TRawEvent<T>[];
    timezone: string;
    formatter?: IFormatter;
};

export class CalendarCore<T> {
    public days: TDaysService<T>;
    public weeks: TWeeksService<T>;
    public months: TMonthService<T>;
    private formatter: Required<IFormatter>;
    public date: IDate;

    constructor(private config: TCoreConfig<T>) {
        this.formatter = getFormatter(this.config.formatter);
        this.date = getCurrentDate();

        this.days = new DaysService({
            ...this.config,
            formatter: this.formatter,
            date: this.date,
        });
        this.weeks = new WeeksService({
            ...this.config,
            formatter: this.formatter,
            date: this.date,
        });
        this.months = new MonthsService({
            ...this.config,
            formatter: this.formatter,
            date: this.date,
        });
    }

    get currentDay() {
        const { date } = this.date;

        return date.toLocaleString(this.config.locale, {
            day: "numeric",
        });
    }

    get currentMonth() {
        const { date } = this.date;
        const month = date.toLocaleString(this.config.locale, {
            month: "long",
        });

        return capitalize(month);
    }

    get currentYear() {
        const { date } = this.date;

        return date.toLocaleString(this.config.locale, {
            year: "numeric",
        });
    }

    public getDefaultDay(view: TView): TDayWithEvents<T>[] {
        const { events } = this.config;

        switch (view) {
            case "day":
                return this.days.getDay(events);
            case "week":
                return this.weeks.getWeek(events);
            case "month":
                return this.months.getMonth(events);
        }
    }

    public changeEvents(
        events: TRawEvent<T>[],
        view: TView
    ): TDayWithEvents<T>[] {
        switch (view) {
            case "day":
                return this.days.getDay(events);
            case "week":
                return this.weeks.getWeek(events);
            case "month":
                return this.months.getMonth(events);
        }
    }

    public getHeaders(): string[] {
        const { locale } = this.config;

        const monday = new Date(Date.UTC(2017, 0, 2));
        const headers = [];

        for (let i = 0; i < 7; i++) {
            const day = monday.toLocaleDateString(locale, {
                weekday: this.formatter.headers,
            });
            headers.push(capitalize(day));
            monday.setDate(monday.getDate() + 1);
        }

        return headers;
    }
}
