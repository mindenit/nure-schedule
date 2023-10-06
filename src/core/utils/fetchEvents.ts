import nurekit from "core/services/nurekit.serivce";
import { TFetchEventsType } from "core/types/events.types";
import { getMonth } from "./getMonth";

interface IArgs {
    type: TFetchEventsType;
    name: string;
}

interface IFetcherArgs {
    name: string;
    firstDay: string;
    lastDay: string;
}

export const fetchEvents = async (args: IArgs) => {
    const { type, name } = args;
    const { firstDay, lastDay } = getMonth();

    switch (type) {
        case "auditorium":
            return fetchEventsByAuditorium({ name, firstDay, lastDay });
        case "group":
            return fetchEventsByGroup({ name, firstDay, lastDay });
        case "teacher":
            return fetchEventsByTeacher({ name, firstDay, lastDay });
    }
};

const fetchEventsByGroup = async ({
    name,
    firstDay,
    lastDay,
}: IFetcherArgs) => {
    return nurekit.groups.getSchedule({
        groupName: name,
        startTime: firstDay,
        endTime: lastDay,
    });
};

const fetchEventsByTeacher = async ({
    name,
    firstDay,
    lastDay,
}: IFetcherArgs) => {
    return nurekit.teachers.getSchedule({
        teacherName: name,
        startTime: firstDay,
        endTime: lastDay,
    });
};

const fetchEventsByAuditorium = async ({
    name,
    firstDay,
    lastDay,
}: IFetcherArgs) => {
    return nurekit.teachers.getSchedule({
        teacherName: name,
        startTime: firstDay,
        endTime: lastDay,
    });
};
