import { ISchedule } from "nurekit";
import { TEvent } from "@onetools/calendar";

type TModifiedSchedule = Omit<ISchedule, "startTime" | "endTime">;

interface IEvent extends TEvent<TModifiedSchedule> {}

type TFetchEventsType = "auditorium" | "group" | "teacher";

interface IEventsArgs {
    type: "auditorium" | "group" | "teacher" | undefined;
    name: string;
}

export type { IEvent, TModifiedSchedule, TFetchEventsType, IEventsArgs };
