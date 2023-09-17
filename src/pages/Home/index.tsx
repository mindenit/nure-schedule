import MainLayout from "pages/layout/MainLayout";

import * as S from "./Home.styles";
import * as C from "styles/components";

import { Button } from "components/ui/Button";
import { Dialog } from "components/ui/Dialog";
import { List } from "components/ui/List";

import AddIcon from "@mui/icons-material/Add";

import useGroupsFetching from "core/hooks/useGroups";

import { useDispatch /* , useSelector */ } from "react-redux";
// import { RootState } from "core/store/store";
import { groupsActions } from "core/store/slices/group.slice";

const Home: React.FC = () => {
    const { groups, loading, error } = useGroupsFetching();

    // const { activeGroup } = useSelector((state: RootState) => state.groups);
    const dispatch = useDispatch();

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
                            <List.Root>
                                {loading && <div>Завантаження груп...</div>}
                                {error === null ? (
                                    groups.map((group) => (
                                        <List.Item
                                            key={group.id}
                                            onClick={() =>
                                                dispatch(
                                                    groupsActions.setActiveGroup(
                                                        group
                                                    )
                                                )
                                            }
                                        >
                                            <List.Header>
                                                {group.name}
                                            </List.Header>
                                        </List.Item>
                                    ))
                                ) : (
                                    <div>Error: {error.message}</div>
                                )}
                            </List.Root>
                        </Dialog.Content>
                    </Dialog.Root>
                </S.HomeButtonContainer>
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
