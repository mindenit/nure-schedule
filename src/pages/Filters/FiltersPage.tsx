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
                <S.StyledHeader>
                    <C.TitleLarge>Фільтри</C.TitleLarge>
                    <SelectFilterDialog />
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
