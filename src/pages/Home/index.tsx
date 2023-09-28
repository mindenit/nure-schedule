import { useSelector } from "react-redux";

import MainLayout from "pages/layout/MainLayout";

import * as C from "styles/components";
import * as S from "./Home.styles";

import { Calendar } from "components/ui/Calendar/Calendar";

import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";
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
