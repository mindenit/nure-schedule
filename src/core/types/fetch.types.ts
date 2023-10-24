import { ISchedule } from "@nurejs/api";

export interface IFetchScheduleProps {
    // groupEvents: ISchedule[];
    // teacherEvents: ISchedule[];
    // auditoriumEvents: ISchedule[];
    allEvents: ISchedule[];
    loading: boolean;
    error: null | Error;
    fetchState: "group" | "auditorium" | "teacher" | undefined;
}
