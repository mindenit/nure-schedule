import { Dropdown } from "components/ui/Dropdown";
import { Loader } from "components/ui/Loader";
import { Tabs } from "components/ui/Tabs";
import { LOCALE } from "core/constants";
import { useFilters } from "core/hooks/useFilters";
import { RootState } from "core/store/store";
import { getMonthName } from "core/utils/getMonthName";
import { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/media";
import * as S from "./Calendar.styles";
import { CalendarDayView } from "./DayView/DayView";
import { CalendarMonthView } from "./MonthView/MonthView";
import { CalendarWeekView } from "./WeekView/WeekView";
import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";

import { fetchEventsActions } from "core/store/slices/fetch/events/fetchEvents.slice";

import * as C from "styles/components";
import { useCalendar } from "@onetools/calendar";

interface CalendarProps {
    type: "auditorium" | "group" | "teacher" | undefined;
    name: string;
}

export const Calendar: FC<CalendarProps> = ({ type, name }) => {
    const { activeItem, allSelectedItems } = useSelector(
        (state: RootState) => state.data
    );
    const { allEvents, loading, error } = useSelector(
        (state: RootState) => state.fetchEvents
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventsActions.fetchEventsAction({ type, name }));
    }, [type, name]);

    useEffect(() => {
        console.info(error);
    }, [error]);

    const { applyFilters } = useFilters();

    const isMobile = useMediaQuery({
        query: media.medium,
    });

    const calendar = useCalendar({
        locale: LOCALE,
        timezone: "Europe/Kiev",
        defaultView: "month",
        events: applyFilters(allEvents),
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
                                        <Dropdown
                                            items={allSelectedItems}
                                            activeItem={activeItem}
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
                                            <Dropdown
                                                items={allSelectedItems}
                                                activeItem={activeItem}
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
                    {error !== null ? (
                        error.code === "ERR_BAD_RESPONSE" ? (
                            <C.CenteredElement>
                                <C.CentredText>
                                    <C.TitleLarge>
                                        Розклад недоступний
                                    </C.TitleLarge>
                                </C.CentredText>
                            </C.CenteredElement>
                        ) : (
                            <C.CenteredElement>
                                <C.CentredText>
                                    <C.TitleLarge>Сталася помилка</C.TitleLarge>
                                    <C.TitleMedium>
                                        {error.message}
                                    </C.TitleMedium>
                                </C.CentredText>
                            </C.CenteredElement>
                        )
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
