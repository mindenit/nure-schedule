import { useSelector } from "react-redux";
import { Tabs } from "components/ui/Tabs";
import { GroupDropdown } from "components/ui/GroupDropdown";

import { RootState } from "core/store/store";
import { getMonthName } from "core/utils/getMonthName";

const TopContainer: React.FC = () => {
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );

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

    return (
        <>
            <Tabs.List variant="compact" asChild>
                <S.StyledToolbar>
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
                </S.StyledToolbar>
            </Tabs.List>
        </>
    );
};
