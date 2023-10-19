import { useSelector } from "react-redux";
import { FC, Fragment, useEffect, useState } from "react";
import { useCalendar } from "@onetools/calendar";
import * as S from "./Calendar.styles";
import { CalendarMonthView } from "./MonthView/MonthView";
import { CalendarWeekView } from "./WeekView/WeekView";
import { useEvents } from "core/hooks/useEvents";
import { CalendarDayView } from "./DayView/DayView";
import { getMonthName } from "core/utils/getMonthName";
import { TFetchEventsType } from "core/types/events.types";
import { RootState } from "core/store/store";
import { GroupDropdown } from "components/ui/GroupDropdown";
import { Loader } from "components/ui/Loader";
import { Tabs } from "components/ui/Tabs";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/media";
import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";
import { IFetchScheduleProps } from "core/types/fetch.types";

interface CalendarProps {
    type: TFetchEventsType;
    name: string;
}

export const Calendar: FC<CalendarProps> = ({ type, name }) => {
    const [events1, setEvents1] = useState<IFetchScheduleProps>({
        events: [],
        loading: true,
        error: null,
    });
    const { events, loading } = useEvents({ type, name });
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );

    useEffect(() => {
        const fetcher = async () => {
            const data = await useEvents({ type, name });
            setEvents1({
                events: data.events,
                loading: data.loading,
                error: data.error,
            });
        };
        fetcher();
    }, [name]);

    const isMobile = useMediaQuery({
        query: media.medium,
    });

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

    if (loading) return <Loader />;

    return (
        <Fragment>
            <Tabs.Root value={calendar.activeView} asChild>
                <S.StyledTabsRoot>
                    <Tabs.List variant="compact" asChild>
                        <S.StyledToolbar>
                            {isMobile ? (
                                <>
                                    <div className="ToolbarItem">
                                        <GroupDropdown
                                            items={allSelectedGroups}
                                            activeItem={activeGroup}
                                            month={getMonthName()}
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
                                </>
                            ) : (
                                <>
                                    <S.StyledDesktopToolbar>
                                        <div className="ToolbarItem">
                                            <GroupDropdown
                                                items={allSelectedGroups}
                                                activeItem={activeGroup}
                                                month={getMonthName()}
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
                                    </S.StyledDesktopToolbar>
                                    <SelectScheduleDialog />
                                </>
                            )}
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
