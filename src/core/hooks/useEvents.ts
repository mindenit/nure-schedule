import { ISchedule } from "@nurejs/api";
import nurekit from "core/services/nurekit";
import { getMonth } from "core/utils/getMonth";
import { useEffect, useState } from "react";

export const useEvents = () => {
    const [events, setEvents] = useState<ISchedule[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { firstDay, lastDay } = getMonth();

                await nurekit.groups
                    .getSchedule({
                        groupName: "пзпі-23-1",
                        startTime: firstDay,
                        endTime: lastDay,
                    })
                    .then((res) => {
                        const modifiedEvents = res.map((event) => {
                            return {
                                ...event,
                                startTime: +event.startTime,
                                endTime: +event.endTime,
                            };
                        });

                        setEvents(modifiedEvents);
                    });
            } catch (error) {
                console.log(error);
            }
        };

        fetchEvents();
    });

    return { events };
};
