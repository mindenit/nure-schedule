import { ISchedule } from "nurekit";
import { IError } from "./error.types";

export interface IFetchScheduleProps {
    allEvents: ISchedule[];
    loading: boolean;
    error: null | IError;
    fetchState: "group" | "auditorium" | "teacher" | undefined;
}
