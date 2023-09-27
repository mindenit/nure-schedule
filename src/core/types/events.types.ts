import { ISchedule } from "@nurejs/api";
import { TEvent } from "@onetools/calendar";

type TModifiedSchedule = Omit<ISchedule, "startTime" | "endTime">;

interface IEvent extends TEvent<TModifiedSchedule> {}

type TFetchEventsType = "auditorium" | "group" | "teacher";

export type { IEvent, TModifiedSchedule, TFetchEventsType };
