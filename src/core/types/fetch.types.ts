import { ISchedule } from "@nurejs/api";

export interface IFetchScheduleProps {
    events: ISchedule[];
    loading: boolean;
    error: null | Error;
}
