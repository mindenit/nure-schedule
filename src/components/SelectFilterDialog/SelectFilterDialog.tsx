import { Add } from "@mui/icons-material";
import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { SearchField } from "components/ui/SearchField";
import { Tabs } from "components/ui/Tabs";
import useMultiFetch from "core/hooks/useMultiFetch";
import { FC, Suspense, memo, useState } from "react";
import { AuditoriumsView } from "./AuditoriumsView";
import { LessonsView } from "./LessonsView";
import * as S from "./SelectFilterDialog.styles";
import { TeachersView } from "./TeachersView";

export const SelectFilterDialog: FC = memo(() => {
    const [query, setQuery] = useState("");
    const { loading, error } = useMultiFetch(true, true, true);

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
                    name="search"
                    placeholder="Пошук..."
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
                            <Tabs.Trigger value="lessons">Пари</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="teachers">
                            <Suspense>
                                <TeachersView
                                    loading={loading}
                                    error={error}
                                    query={query}
                                />
                            </Suspense>
                        </Tabs.Content>
                        <Tabs.Content value="auditoriums">
                            <Suspense>
                                <AuditoriumsView
                                    loading={loading}
                                    error={error}
                                    query={query}
                                />
                            </Suspense>
                        </Tabs.Content>
                        <Tabs.Content value="lessons">
                            <LessonsView />
                        </Tabs.Content>
                    </S.StyledTabsContent>
                </Tabs.Root>
            </Dialog.Content>
        </Dialog.Root>
    );
});
