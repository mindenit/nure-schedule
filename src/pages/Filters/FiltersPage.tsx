import { SelectFilterDialog } from "components/SelectFilterDialog/SelectFilterDialog";
import { Card } from "components/ui/Card";
import { useAuditoriumsFilter } from "core/hooks/useAuditoriumsFilter";
import { useTeachersFilter } from "core/hooks/useTeachersFilter";
import MainLayout from "pages/layout/MainLayout";
import { FC } from "react";
import * as C from "../../styles/components";
import * as S from "./Filters.styles";

export const FiltersPage: FC = () => {
    const { auditoriumsFilter, removeAuditoriumsFilter } =
        useAuditoriumsFilter();
    const { teachersFilter, removeTeacherFilter } = useTeachersFilter();

    return (
        <MainLayout logoText="Фільтр">
            <S.StyledFiltersPage>
                <C.Container>
                    <S.StyledHeader>
                        <C.TitleLarge>Фільтри</C.TitleLarge>
                        <SelectFilterDialog />
                    </S.StyledHeader>
                </C.Container>
                <C.Container>
                    <S.StyledBody>
                        {teachersFilter.length > 0 && (
                            <S.StyledWrapper>
                                <C.TitleLarge>Викладачі</C.TitleLarge>
                                <S.StyledCardsContainer>
                                    {teachersFilter.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() =>
                                                removeTeacherFilter(item)
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
                                <C.TitleLarge>Авдиторії</C.TitleLarge>
                                <S.StyledCardsContainer>
                                    {auditoriumsFilter.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() =>
                                                removeAuditoriumsFilter(item)
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
                    </S.StyledBody>
                </C.Container>
            </S.StyledFiltersPage>
        </MainLayout>
    );
};
