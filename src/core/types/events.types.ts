import { ISchedule } from "@nurejs/api";
import { TEvent } from "@onetools/calendar";

type TModifiedSchedule = Omit<ISchedule, "startTime" | "endTime">;

interface IEvent extends TEvent<TModifiedSchedule> {}

export type { IEvent, TModifiedSchedule };
