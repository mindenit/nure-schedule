import { SelectFilterDialog } from "components/SelectFilterDialog/SelectFilterDialog";
import { Card } from "components/ui/Card";
import { useAuditoriumsFilter } from "core/hooks/useAuditoriumsFilter";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import MainLayout from "pages/layout/MainLayout";
import { FC } from "react";
import * as C from "../../styles/components";
import * as S from "./Filters.styles";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/media";
import { useLessonsFilter } from "core/hooks/useLessonsFilter";

export const FiltersPage: FC = () => {
    const { auditoriumsFilter, removeAuditoriumFromFilter } =
        useAuditoriumsFilter();
    const { teachersFilter, removeTeacherFromFilter } = useTeachersFilter();
    const { lessonsFilter, removeLessonFromFilter } = useLessonsFilter();

    const isMobile = useMediaQuery({
        query: media.medium,
    });

    return (
        <MainLayout logoText="Фільтр">
            <S.StyledFiltersPage>
                <C.Container>
                    <S.StyledHeader>
                        <C.TitleLarge>Фільтри</C.TitleLarge>
                        {!isMobile && <SelectFilterDialog />}
                    </S.StyledHeader>
                    <C.TitleMedium>
                        Оберіть елементи які не треба показувати
                    </C.TitleMedium>
                </C.Container>
                <C.Container>
                    <S.StyledBody>
                        {teachersFilter.length > 0 && (
                            <S.StyledWrapper>
                                <C.TitleLarge>Викладачі:</C.TitleLarge>
                                <S.StyledCardsContainer>
                                    {teachersFilter.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() =>
                                                removeTeacherFromFilter(item)
                                            }
                                        >
                                            <Card
                                                id={item.id.toString()}
                                                cardType="info"
                                                title={item.fullName}
                                            />
                                        </div>
                                    ))}
                                </S.StyledCardsContainer>
                            </S.StyledWrapper>
                        )}
                        {auditoriumsFilter.length > 0 && (
                            <S.StyledWrapper>
                                <C.TitleLarge>Авдиторії:</C.TitleLarge>
                                <S.StyledCardsContainer>
                                    {auditoriumsFilter.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() =>
                                                removeAuditoriumFromFilter(item)
                                            }
                                        >
                                            <Card
                                                id={item.id.toString()}
                                                cardType="info"
                                                title={item.name}
                                            />
                                        </div>
                                    ))}
                                </S.StyledCardsContainer>
                            </S.StyledWrapper>
                        )}
                        {lessonsFilter.length > 0 && (
                            <S.StyledWrapper>
                                <C.TitleLarge>Тип пар:</C.TitleLarge>
                                <S.StyledCardsContainer>
                                    {lessonsFilter.map((item) => (
                                        <div
                                            key={item.type}
                                            onClick={() =>
                                                removeLessonFromFilter(item)
                                            }
                                        >
                                            <Card
                                                id={item.type}
                                                cardType="info"
                                                title={item.name}
                                            />
                                        </div>
                                    ))}
                                </S.StyledCardsContainer>
                            </S.StyledWrapper>
                        )}
                    </S.StyledBody>
                </C.Container>
                {isMobile && (
                    <S.FilterButtonContainer>
                        <SelectFilterDialog />
                    </S.FilterButtonContainer>
                )}
            </S.StyledFiltersPage>
        </MainLayout>
    );
};
