interface IDay {
	day: string;
	weekday: string;
	month: string;
	year: string;
	isCurrentDay: boolean;
	isCurrentMonth: boolean;
}

type TRawEvent<T> = T & {
	startTime: number;
	endTime: number;
}

type TEvent<T> = T & {
	startTime: string;
	endTime: string;
}

interface IViews {
	month?: string;
	week?: string;
	day?: string;
}

type TView = "day" | "week" | "month";

type TDayWithEvents<T> = IDay & {
	events: TEvent<T>[]
}

type THeadersFormat = "long" | "narrow" | "short";
type TDaysFormat = "2-digit" | "numeric";
type TMonthesFormat = "2-digit" | "long" | "narrow" | "numeric" | "short";

interface IFormatter {
	headers?: THeadersFormat;
	days?: TDaysFormat;
	weekdays?: THeadersFormat;
	months?: TMonthesFormat;
	years?: TDaysFormat;
	minutes?: TDaysFormat;
	hours?: TDaysFormat;
}

interface IDate {
	date: Date;
	month: number;
	year: number;
}

export type {
	IDay,
	IViews,
	TView,
	IFormatter,
	TEvent,
	TRawEvent,
	TDayWithEvents,
	IDate
};
