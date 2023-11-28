import { IGroup } from "nurekit";

import * as C from "styles/components";
import * as S from "./MobileDayModal.styles";

interface Props {
    groups: IGroup;
    dayAndMonth: string;
    onCloseClick: () => void;
    isEmpty?: boolean;
    children?: React.ReactNode;
}

const MobileDayModal: React.FC<Props> = ({
    groups,
    dayAndMonth,
    onCloseClick,
    isEmpty = false,
    children,
}) => {
    return (
        <S.StyledMobileModalCont>
            <S.StyledMobileModalHeader>
                <C.Container>
                    <S.StyledMobileModalIcon onClick={onCloseClick} />
                    <S.StyledMobileModalTextCont>
                        {/* {groups.map((group) => (
                            <C.TitleMedium key={group.id}>
                                {group.name}
                            </C.TitleMedium>
                        ))} */}
                        {groups.name}
                        <C.TitleLarge>{dayAndMonth}</C.TitleLarge>
                    </S.StyledMobileModalTextCont>
                </C.Container>
            </S.StyledMobileModalHeader>
            <C.Container>
                <S.StyledMobileModalChildrenCont>
                    {isEmpty ? (
                        <S.StyledMobileModalEmptyCont>
                            <S.StyledMobileModalEmptyEmoji />
                            <S.StyledMobileModalEmptyText>
                                Сьогодні пар немає
                            </S.StyledMobileModalEmptyText>
                        </S.StyledMobileModalEmptyCont>
                    ) : (
                        children
                    )}
                </S.StyledMobileModalChildrenCont>
            </C.Container>
        </S.StyledMobileModalCont>
    );
};

export { MobileDayModal };
