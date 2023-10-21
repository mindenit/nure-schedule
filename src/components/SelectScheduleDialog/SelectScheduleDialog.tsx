import { Add } from "@mui/icons-material";
import { ListView } from "components/ListViews";
import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { SearchField } from "components/ui/SearchField";
import { Tabs } from "components/ui/Tabs";
import { useActions } from "core/hooks/useActions";
import { useState } from "react";
import { searchItems } from "core/utils";
import { IAuditorium, IGroup, ITeacher } from "@nurejs/api";
import * as S from "./SelectScheduleDialog.styles";
import useMultiFetch from "core/hooks/useMultiFetch";
import { useSelector } from "react-redux";
import { RootState } from "core/store/store";

export const SelectScheduleDialog = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };

    const { loading, error } = useMultiFetch(true, true, true);

    const { groups } = useSelector((state: RootState) => state.fetchGroups);
    const { teachers } = useSelector((state: RootState) => state.fetchTeachers);
    const { auditoriums } = useSelector(
        (state: RootState) => state.fetchAuditoriums
    );

    const { addGroup, addTeacher } = useActions();

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <Add />
                    Додати розклад
                </Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header title="Оберіть групу" />
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
                            <ListView
                                items={searchItems<IGroup>(
                                    groups,
                                    value,
                                    (el) => el.name
                                )}
                                renderItem={(group) => group.name}
                                loading={loading}
                                error={error}
                                onItemClick={(group) => {
                                    addGroup(group);
                                }}
                            />
                        </Tabs.Content>
                        <Tabs.Content value="teachers">
                            <ListView
                                items={searchItems<ITeacher>(
                                    teachers,
                                    value,
                                    (el) => el.fullName
                                )}
                                renderItem={(teacher) => teacher.fullName}
                                loading={loading}
                                error={error}
                                onItemClick={(teacher) => {
                                    addTeacher(teacher);
                                }}
                            />
                        </Tabs.Content>
                        <Tabs.Content value="auditoriums">
                            <ListView
                                items={searchItems<IAuditorium>(
                                    auditoriums,
                                    value,
                                    (el) => el.name
                                )}
                                renderItem={(auditorium) => auditorium.name}
                                loading={loading}
                                error={error}
                                onItemClick={() => {
                                    console.log("Selected aud");
                                }}
                            />
                        </Tabs.Content>
                    </S.StyledTabsContent>
                </Tabs.Root>
            </Dialog.Content>
        </Dialog.Root>
    );
};
