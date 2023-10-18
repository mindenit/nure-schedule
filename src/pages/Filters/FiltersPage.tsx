import { Add } from "@mui/icons-material";
import { ListView } from "components/ListViews";
import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { SearchField } from "components/ui/SearchField";
import { Tabs } from "components/ui/Tabs";
import { useAuditoriumsFilter } from "core/hooks/useAuditoriumsFilter";
import useMultiFetch from "core/hooks/useMultiFetch";
import MainLayout from "pages/layout/MainLayout";
import { FC, useState } from "react";
import * as C from "../../styles/components";
import * as S from "./Filters.styles";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import { searchItems } from "core/utils";
import { IAuditorium } from "@nurejs/api";
import { Card } from "components/ui/Card";

export const FiltersPage: FC = () => {
    const [query, setQuery] = useState("");
    const { auditoriumsFilter, addAuditoriumsFilter, removeAuditoriumsFilter } =
        useAuditoriumsFilter();
    const { teachersFilter, addTeachersFilter, removeTeacherFilter } =
        useTeachersFilter();
    const { teachers, auditoriums, loading, error } = useMultiFetch(
        true,
        true,
        true
    );

    return (
        <MainLayout logoText="Фільтр">
            <S.StyledFiltersPage>
                <S.StyledHeader>
                    <C.TitleLarge>Фільтри</C.TitleLarge>
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
                            <Tabs.Root defaultValue="teachers">
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
                                        renderItem={(teacher) =>
                                            teacher.fullName
                                        }
                                        loading={loading}
                                        error={error}
                                        onItemClick={addTeachersFilter}
                                    />
                                </Tabs.Content>
                                <Tabs.Content value="auditoriums">
                                    <ListView
                                        items={searchItems<IAuditorium>(
                                            auditoriums,
                                            query,
                                            (el) => el.name
                                        )}
                                        renderItem={(auditorium) =>
                                            auditorium.name
                                        }
                                        loading={loading}
                                        error={error}
                                        onItemClick={addAuditoriumsFilter}
                                    />
                                </Tabs.Content>
                            </Tabs.Root>
                        </Dialog.Content>
                    </Dialog.Root>
                </S.StyledHeader>
                <S.StyledBody>
                    {teachersFilter.length > 0 && (
                        <S.StyledWrapper>
                            <C.TitleLarge>Викладачі</C.TitleLarge>
                            <S.StyledCardsContainer>
                                {teachersFilter.map((item) => (
                                    <Card
                                        id={item.id.toString()}
                                        key={item.id}
                                        cardType="info"
                                        title={item.fullName}
                                        onClick={() =>
                                            removeTeacherFilter(item)
                                        }
                                    />
                                ))}
                            </S.StyledCardsContainer>
                        </S.StyledWrapper>
                    )}
                    {auditoriumsFilter.length > 0 && (
                        <S.StyledWrapper>
                            <C.TitleLarge>Авдиторії</C.TitleLarge>
                            <S.StyledCardsContainer>
                                {auditoriumsFilter.map((item) => (
                                    <Card
                                        id={item.id.toString()}
                                        key={item.id}
                                        cardType="info"
                                        title={item.name}
                                        onClick={() =>
                                            removeAuditoriumsFilter(item)
                                        }
                                    />
                                ))}
                            </S.StyledCardsContainer>
                        </S.StyledWrapper>
                    )}
                </S.StyledBody>
            </S.StyledFiltersPage>
        </MainLayout>
    );
};
