import {
	IDay,
	IFormatter
} from "../../types.js";

interface ITrasnformerConfig {
	locale: string;
	formatter: IFormatter;
	timezone: string;
}

interface IDaysTransformer {
	transformDay: (date: Date) => IDay;
}

interface ITimestampTransformer {
	toString: (date: number) => string;
	toDay: (date: number) => string;
	toMonth: (date: number) => string;
}

export type {
	IDaysTransformer,
	ITimestampTransformer,
	ITrasnformerConfig
};

