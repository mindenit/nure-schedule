import { useState } from "react";
import { IAuditorium, IGroup, ITeacher } from "@nurejs/api";
import { useSelector } from "react-redux";

import MainLayout from "pages/layout/MainLayout";

import * as S from "./Home.styles";
import * as C from "styles/components";

import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { Tabs } from "components/ui/Tabs";
import { SearchField } from "components/ui/SearchField";
import { ListView } from "components/ListViews";
import { Card } from "components/ui/Card";

import AddIcon from "@mui/icons-material/Add";

import { RootState } from "core/store/store";
import useMultiFetch from "core/hooks/useMultiFetch";
import { useActions } from "core/hooks/useActions";
import { searchItems } from "core/utils";

const Home: React.FC = () => {
    const [value, setValue] = useState("");

    const { groups, auditoriums, teachers, loading, error } = useMultiFetch(
        true,
        true,
        true
    );

    const { allSelectedGroups } = useSelector(
        (state: RootState) => state.groups
    );
    const { setActiveGroup, addGroup, removeGroup } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };

    return (
        <MainLayout>
            <S.HomeContainer>
                {allSelectedGroups.length === 0 ? (
                    <S.HomeEmptyPageContainer>
                        <S.HomeEmoji />
                        <S.HomeTitle>У вас поки немає розкладів</S.HomeTitle>
                        <C.TitleMedium>Додайте розклади</C.TitleMedium>
                    </S.HomeEmptyPageContainer>
                ) : (
                    <S.HomeFilledPageContainer>
                        <C.TitleLarge>Оберіть групу:</C.TitleLarge>
                        {allSelectedGroups.map((el: IGroup) => (
                            <Card
                                key={el.id}
                                id={String(el.id)}
                                cardType="group"
                                group={el}
                                onClick={() => setActiveGroup(el)}
                                onCloseClick={() => removeGroup(el)}
                            />
                        ))}
                    </S.HomeFilledPageContainer>
                )}
                <S.HomeButtonContainer>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button>
                                <AddIcon />
                                Додати розклад
                            </Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header title="Оберіть групу" />
                            <SearchField
                                value={value}
                                name="search"
                                placeholder="Пошук..."
                                onChange={handleChange}
                            />
                            <Tabs.Root defaultValue="groups">
                                <S.HomeDialogContainer>
                                    <Tabs.List>
                                        <Tabs.Trigger value="groups">
                                            Групи
                                        </Tabs.Trigger>
                                        <Tabs.Trigger value="teachers">
                                            Викладачі
                                        </Tabs.Trigger>
                                        <Tabs.Trigger value="auditoriums">
                                            Авдиторії
                                        </Tabs.Trigger>
                                    </Tabs.List>
                                </S.HomeDialogContainer>
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
                                        renderItem={(teacher) =>
                                            teacher.fullName
                                        }
                                        loading={loading}
                                        error={error}
                                        onItemClick={() => {
                                            console.log("Selected teacher");
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
                                        renderItem={(auditorium) =>
                                            auditorium.name
                                        }
                                        loading={loading}
                                        error={error}
                                        onItemClick={() => {
                                            console.log("Selected aud");
                                        }}
                                    />
                                </Tabs.Content>
                            </Tabs.Root>
                        </Dialog.Content>
                    </Dialog.Root>
                </S.HomeButtonContainer>
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
