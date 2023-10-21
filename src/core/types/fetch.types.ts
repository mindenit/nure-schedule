import { ISchedule } from "@nurejs/api";
import { IEventsArgs } from "./events.types";

export interface IFetchScheduleProps {
    events: ISchedule[];
    loading: boolean;
    error: null | Error;
    payload: IEventsArgs | object;
}
