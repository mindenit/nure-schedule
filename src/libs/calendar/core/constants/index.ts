import { IFormatter } from "../../types.js";

export const DEFAULT_FORMATTER: Required<IFormatter> = {
	headers: "short",
	days: "2-digit",
	weekdays: "long",
	months: "long",
	years: "numeric",
	minutes: "2-digit",
	hours: "2-digit",
};
