import { useCalendar } from "@onetools/calendar";
import { FC, Fragment } from "react";
import { Tabs } from "../Tabs";
import * as S from "./Calendar.styles";
import { CalendarMonthView } from "./MonthView/MonthView";
import { CalendarWeekView } from "./WeekView/WeekView";
import { useEvents } from "core/hooks/useEvents";
import { CalendarDayView } from "./DayView/DayView";
import { TFetchEventsType } from "core/types/events.types";
import { RootState } from "core/store/store";
import { useSelector } from "react-redux";
import { GroupDropdown } from "../GroupDropdown";

interface CalendarProps {
    type: TFetchEventsType;
    name: string;
}

export const Calendar: FC<CalendarProps> = ({ type, name }) => {
    const { events, isLoading } = useEvents({ type, name });
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );

    const calendar = useCalendar({
        locale: "uk-UK",
        timezone: "Europe/Kiev",
        defaultView: "month",
        events: events,
        formatter: {
            months: "2-digit",
            hours: "numeric",
        },
    });

    const views = [
        {
            name: "Місяць",
            onClick: calendar.getMonth,
            value: "month",
        },
        {
            name: "Тиждень",
            onClick: calendar.getWeek,
            value: "week",
        },
        {
            name: "День",
            onClick: calendar.getDay,
            value: "day",
        },
    ];

    if (isLoading) {
        return <div>Завантаження...</div>;
    }

    return (
        <Fragment>
            <Tabs.Root value={calendar.activeView} asChild>
                <S.StyledTabsRoot>
                    <Tabs.List variant="compact" asChild>
                        <S.StyledToolbar>
                            <div className="ToolbarItem">
                                <GroupDropdown
                                    items={allSelectedGroups}
                                    activeItem={activeGroup}
                                    month="Вересень"
                                    year={2023}
                                />
                            </div>
                            <div className="ToolbarItem">
                                {views.map((view) => (
                                    <Tabs.Trigger
                                        key={view.value}
                                        value={view.value}
                                        onClick={view.onClick}
                                    >
                                        {view.name}
                                    </Tabs.Trigger>
                                ))}
                            </div>
                        </S.StyledToolbar>
                    </Tabs.List>
                    <Tabs.Content value="month">
                        <CalendarMonthView
                            days={calendar.days}
                            headers={calendar.headers}
                        />
                    </Tabs.Content>
                    <Tabs.Content value="week">
                        <CalendarWeekView days={calendar.days} />
                    </Tabs.Content>
                    <Tabs.Content value="day">
                        <CalendarDayView day={calendar.days[0]} />
                    </Tabs.Content>
                </S.StyledTabsRoot>
            </Tabs.Root>
        </Fragment>
    );
};
