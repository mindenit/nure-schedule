import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import MainLayout from "pages/layout/MainLayout";
import { media } from "styles/media";
import * as S from "./Home.styles";
import { SelectScheduleDialog } from "components/SelectScheduleDialog/SelectScheduleDialog";
import { RootState } from "core/store/store";
import { lazy } from "react";

const Calendar = lazy(() => import("components/ui/Calendar/Calendar"));

const Home: React.FC = () => {
    const isMobile = useMediaQuery({
        query: media.medium,
    });
    const { allSelectedItems, activeItem } = useSelector(
        (state: RootState) => state.data
    );

    return (
        <MainLayout logoText="Розклад">
            <S.HomeContainer>
                {allSelectedItems.length === 0 ? (
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
                            type={activeItem?.type}
                            name={activeItem?.name as string}
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
