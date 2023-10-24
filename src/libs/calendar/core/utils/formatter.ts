import { IFormatter } from "../../types.js";
import { DEFAULT_FORMATTER } from "../constants/index.js";

export const getFormatter = (formatter: IFormatter | undefined): Required<IFormatter> => {
  return {
    days: formatter?.days || DEFAULT_FORMATTER.days,
		weekdays: formatter?.weekdays || DEFAULT_FORMATTER.weekdays,
		months: formatter?.months || DEFAULT_FORMATTER.months,
		years: formatter?.years || DEFAULT_FORMATTER.years,
    minutes: formatter?.minutes || DEFAULT_FORMATTER.minutes,
    hours: formatter?.hours || DEFAULT_FORMATTER.hours,
    headers: formatter?.headers || DEFAULT_FORMATTER.headers,
  }
}
