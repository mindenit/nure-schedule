import { useState } from "react";

import MainLayout from "pages/layout/MainLayout";

import * as S from "./Home.styles";
import * as C from "styles/components";

import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { List } from "components/ui/List";
import { Tabs } from "components/ui/Tabs";
import { Input } from "components/ui/Input";

import AddIcon from "@mui/icons-material/Add";

import useMultiFetch from "core/hooks/useMultiFetch";

import { useActions } from "core/hooks/useActions";

const Home: React.FC = () => {
    const [value, setValue] = useState("");

    const { groups, auditoriums, teachers, loading, error } = useMultiFetch(
        true,
        true,
        true
    );
    const { setActiveGroup } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <MainLayout>
            <S.HomeContainer>
                <S.HomeEmoji />
                <S.HomeTitle>У вас поки немає розкладів</S.HomeTitle>
                <C.TitleMedium>Додайте розклади</C.TitleMedium>
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
                            <Input
                                type="search"
                                showLabel={false}
                                label="search"
                                value={value}
                                name="search"
                                placeholder="Пошук..."
                                onChange={handleChange}
                            />
                            <Tabs.Root defaultValue="groups">
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
                                <Tabs.Content value="groups">
                                    <List.Root>
                                        {loading && <div>Завантаження...</div>}
                                        {error === undefined ? (
                                            groups.map((group) => (
                                                <List.Item
                                                    key={group.id}
                                                    onClick={() =>
                                                        setActiveGroup(group)
                                                    }
                                                >
                                                    <List.Header>
                                                        {group.name}
                                                    </List.Header>
                                                </List.Item>
                                            ))
                                        ) : (
                                            <div>Помилка: {error.message}</div>
                                        )}
                                    </List.Root>
                                </Tabs.Content>
                                <Tabs.Content value="teachers">
                                    <List.Root>
                                        {loading && <div>Завантаження...</div>}
                                        {error === undefined ? (
                                            teachers.map((teacher) => (
                                                <List.Item key={teacher.id}>
                                                    <List.Header>
                                                        {teacher.fullName}
                                                    </List.Header>
                                                </List.Item>
                                            ))
                                        ) : (
                                            <div>Помилка: {error.message}</div>
                                        )}
                                    </List.Root>
                                </Tabs.Content>
                                <Tabs.Content value="auditoriums">
                                    <List.Root>
                                        {loading && <div>Завантаження...</div>}
                                        {error === undefined ? (
                                            auditoriums.map((aud) => (
                                                <List.Item key={aud.id}>
                                                    <List.Header>
                                                        {aud.name}
                                                    </List.Header>
                                                </List.Item>
                                            ))
                                        ) : (
                                            <div>Помилка: {error.message}</div>
                                        )}
                                    </List.Root>
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
