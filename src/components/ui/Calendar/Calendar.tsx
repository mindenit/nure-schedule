import { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCalendar } from "@onetools/calendar";
import * as S from "./Calendar.styles";
import { CalendarMonthView } from "./MonthView/MonthView";
import { CalendarWeekView } from "./WeekView/WeekView";
import { CalendarDayView } from "./DayView/DayView";
import { getMonthName } from "core/utils/getMonthName";
import { TFetchEventsType } from "core/types/events.types";
import { RootState } from "core/store/store";
import { GroupDropdown } from "components/ui/GroupDropdown";
import { Loader } from "components/ui/Loader";
import { Tabs } from "components/ui/Tabs";
import { useFilters } from "core/hooks/useFilters";
import { LOCALE } from "core/constants";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/media";
import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";

import { fetchEventsActions } from "core/store/slices/fetch/events/fetchEvents.slice";

import * as C from "styles/components";

interface CalendarProps {
    type: TFetchEventsType;
    name: string;
}

export const Calendar: FC<CalendarProps> = ({ type, name }) => {
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );
    const { events, loading, error } = useSelector(
        (state: RootState) => state.fetchEvents
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEventsActions.fetchEventsAction({ type, name }));
    }, []);

    const { applyFilters } = useFilters();

    const isMobile = useMediaQuery({
        query: media.medium,
    });

    const calendar = useCalendar({
        locale: LOCALE,
        timezone: "Europe/Kiev",
        defaultView: "month",
        events: applyFilters(events),
        formatter: {
            months: "2-digit",
            hours: "numeric",
        },
    });

    // ця функція повинна оновлювати івенти при зміні активного елементу в дропдауні
    // якось в мене воно раз запрацювало, спробуй вставити функцію у різних версіях
    // в views та в onChange. останнє поле не обов'язкове

    // function updateEvents() {
    //     dispatch(fetchEventsActions.fetchEventsAction({ type, name }));
    //     calendar.getMonth;
    // }

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
                                                // onChange={updateEvents}
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
                    {error !== null ? (
                        <C.CenteredElement>
                            <C.TitleLarge>Сталася помилка</C.TitleLarge>
                            <C.TitleMedium>{error.message}</C.TitleMedium>
                        </C.CenteredElement>
                    ) : (
                        <>
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
                        </>
                    )}
                </S.StyledTabsRoot>
            </Tabs.Root>
        </Fragment>
    );
};
