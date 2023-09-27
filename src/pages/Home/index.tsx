import { useSelector } from "react-redux";

import MainLayout from "pages/layout/MainLayout";

import * as C from "styles/components";
import * as S from "./Home.styles";

// import { Card } from "components/ui/Card";

import { Calendar } from "components/ui/Calendar/Calendar";

import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";
import { GroupDropdown } from "components/ui/GroupDropdown";
import { RootState } from "core/store/store";

const Home: React.FC = () => {
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );

    return (
        <MainLayout logoText="Розклад">
            <S.HomeContainer>
                {allSelectedGroups.length === 0 ? (
                    <S.HomeEmptyPageContainer>
                        <S.HomeEmoji />
                        <S.HomeTitle>У вас поки немає розкладів</S.HomeTitle>
                        <C.TitleMedium>Додайте розклади</C.TitleMedium>
                    </S.HomeEmptyPageContainer>
                ) : (
                    <S.HomeFilledPageContainer>
                        <GroupDropdown
                            items={allSelectedGroups}
                            activeItem={activeGroup}
                            month="Вересень"
                            year={2023}
                        ></GroupDropdown>
                        {/* {allSelectedGroups.map((el: IGroup) => (
                            <Card
                                key={el.id}
                                id={String(el.id)}
                                cardType="group"
                                group={el}
                                onClick={() => setActiveGroup(el)}
                                onCloseClick={() => removeGroup(el)}
                            />
                        ))} */}
                        <Calendar
                            type="group"
                            name={activeGroup.name.toLowerCase()}
                        />
                    </S.HomeFilledPageContainer>
                )}

                <S.HomeButtonContainer>
                    <SelectScheduleDialog />
                </S.HomeButtonContainer>
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
