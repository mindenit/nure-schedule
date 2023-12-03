import { Add } from "@mui/icons-material";
import { NavigationView } from "components/NavigationView";
import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { SearchField } from "components/ui/SearchField";
import { Tabs } from "components/ui/Tabs";
import { useActions } from "core/hooks/useActions";
import useMultiFetch from "core/hooks/useMultiFetch";
import { RootState } from "core/store/store";
import { ICommonData } from "core/types/data.types";
import { searchItems } from "core/utils/searchItems";
import { IAuditorium, IGroup } from "nurekit";
import { Suspense, memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./SelectScheduleDialog.styles";

export const SelectScheduleDialog = memo(() => {
    const [value, setValue] = useState("");

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            setValue(inputValue);
        },
        []
    );

    const { loading, error } = useMultiFetch(true, true, true);

    const { groups } = useSelector((state: RootState) => state.fetchGroups);
    const { teachers } = useSelector((state: RootState) => state.fetchTeachers);
    const { auditoriums } = useSelector(
        (state: RootState) => state.fetchAuditoriums
    );

    const { addItem } = useActions();

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <Add />
                    Додати розклад
                </Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header title="Оберіть розклад" />
                <SearchField
                    value={value}
                    name="search"
                    inputMode="text"
                    placeholder="Пошук..."
                    onChange={handleChange}
                    autoFocus
                />
                <Tabs.Root defaultValue="groups" asChild>
                    <S.StyledTabsContent>
                        <Tabs.List>
                            <Tabs.Trigger value="groups">Групи</Tabs.Trigger>
                            <Tabs.Trigger value="teachers">
                                Викладачі
                            </Tabs.Trigger>
                            <Tabs.Trigger value="auditoriums">
                                Авдиторії
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="groups">
                            <Suspense>
                                <NavigationView
                                    items={searchItems<IGroup>(
                                        groups,
                                        value,
                                        (el) => el.name
                                    )}
                                    renderItem={(group) => group.name}
                                    loading={loading}
                                    error={error}
                                    onItemClick={(group) => {
                                        addItem(group as ICommonData);
                                    }}
                                />
                            </Suspense>
                        </Tabs.Content>
                        <Tabs.Content value="teachers">
                            <Suspense>
                                <NavigationView
                                    items={searchItems<ICommonData>(
                                        teachers,
                                        value,
                                        (el) => el.fullName as string
                                    )}
                                    renderItem={(teacher) => teacher.fullName}
                                    loading={loading}
                                    error={error}
                                    onItemClick={(teacher) => {
                                        addItem(teacher as ICommonData);
                                    }}
                                />
                            </Suspense>
                        </Tabs.Content>
                        <Tabs.Content value="auditoriums">
                            <Suspense>
                                <NavigationView
                                    items={searchItems<IAuditorium>(
                                        auditoriums,
                                        value,
                                        (el) => el.name
                                    )}
                                    renderItem={(auditorium) => auditorium.name}
                                    loading={loading}
                                    error={error}
                                    onItemClick={(aud) => {
                                        addItem(aud as ICommonData);
                                    }}
                                />
                            </Suspense>
                        </Tabs.Content>
                    </S.StyledTabsContent>
                </Tabs.Root>
            </Dialog.Content>
        </Dialog.Root>
    );
});
