import { ISchedule } from "@nurejs/api";
import { IError } from "./error.types";

export interface IFetchScheduleProps {
    allEvents: ISchedule[];
    loading: boolean;
    error: null | IError;
    fetchState: "group" | "auditorium" | "teacher" | undefined;
}
