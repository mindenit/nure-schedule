import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import MainLayout from "pages/layout/MainLayout";

import { media } from "styles/media";
import * as S from "./Home.styles";

import { Calendar } from "components/ui/Calendar/Calendar";

import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";
import { RootState } from "core/store/store";

const Home: React.FC = () => {
    const isMobile = useMediaQuery({
        query: media.medium,
    });
    const { allSelectedGroups, activeGroup } = useSelector(
        (state: RootState) => state.groups
    );
    return (
        <MainLayout logoText="Розклад">
            <S.HomeContainer>
                {allSelectedGroups.length === 0 ? (
                    <S.HomeEmptyPageContainer>
                        <S.HomeEmoji />
                        <S.HomeTitle>
                            У вас поки немає <br /> розкладів
                        </S.HomeTitle>
                        <S.HomeSubtitle>Додайте розклади</S.HomeSubtitle>
                        {isMobile || <SelectScheduleDialog />}
                    </S.HomeEmptyPageContainer>
                ) : (
                    <S.HomeFilledPageContainer>
                        <Calendar
                            type="group"
                            name={activeGroup.name.toLowerCase()}
                        />
                    </S.HomeFilledPageContainer>
                )}

                {isMobile && (
                    <S.HomeButtonContainer>
                        <SelectScheduleDialog />
                    </S.HomeButtonContainer>
                )}
            </S.HomeContainer>
        </MainLayout>
    );
};

export default Home;
