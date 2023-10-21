import { Add } from "@mui/icons-material";
import { ListView } from "components/ListViews";
import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { SearchField } from "components/ui/SearchField";
import { Tabs } from "components/ui/Tabs";
import { useAuditoriumsFilter } from "core/hooks/useAuditoriumsFilter";
import useMultiFetch from "core/hooks/useMultiFetch";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import { searchItems } from "core/utils";
import { FC, useState } from "react";
import * as S from "./SelectFilterDialog.styles";
import { useSelector } from "react-redux";
import { RootState } from "core/store/store";

export const SelectFilterDialog: FC = () => {
    const [query, setQuery] = useState("");
    const { addAuditoriumsFilter } = useAuditoriumsFilter();
    const { addTeachersFilter } = useTeachersFilter();
    const { loading, error } = useMultiFetch(true, true, true);

    const { teachers } = useSelector((state: RootState) => state.fetchTeachers);
    const { auditoriums } = useSelector(
        (state: RootState) => state.fetchAuditoriums
    );

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <Add />
                    Додати фільтр
                </Button>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Header title="Фільтри" />
                <SearchField
                    inputMode="text"
                    placeholder="Пошук"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Tabs.Root defaultValue="teachers" asChild>
                    <S.StyledTabsContent>
                        <Tabs.List variant="default">
                            <Tabs.Trigger value="teachers">
                                Викладачі
                            </Tabs.Trigger>
                            <Tabs.Trigger value="auditoriums">
                                Авдиторії
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="teachers">
                            <ListView
                                items={searchItems(
                                    teachers,
                                    query,
                                    (el) => el.shortName
                                )}
                                renderItem={(teacher) => teacher.fullName}
                                loading={loading}
                                error={error}
                                onItemClick={addTeachersFilter}
                            />
                        </Tabs.Content>
                        <Tabs.Content value="auditoriums">
                            <ListView
                                items={searchItems(
                                    auditoriums,
                                    query,
                                    (el) => el.name
                                )}
                                renderItem={(auditorium) => auditorium.name}
                                loading={loading}
                                error={error}
                                onItemClick={addAuditoriumsFilter}
                            />
                        </Tabs.Content>
                    </S.StyledTabsContent>
                </Tabs.Root>
            </Dialog.Content>
        </Dialog.Root>
    );
};
