import { useState, useEffect, useRef } from "react";
import { IGroup } from "@nurejs/api";

import * as C from "styles/components";
import * as S from "./GroupDropdown.styles";

import CloseIcon from "@mui/icons-material/Close";
import { useActions } from "core/hooks/useActions";

interface Props {
    items: IGroup[];
    activeItem: IGroup;
    month: string;
    year: number | string;
    onItemRemove?: () => void;
}

const GroupDropdown: React.FC<Props> = ({ items, activeItem, month, year }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { setActiveGroup, removeGroup } = useActions();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = (item: IGroup) => {
        setActiveGroup(item);
        setIsOpen(false);
    };
    const handleGlobalClick = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            isOpen
        )
            setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleGlobalClick);
        return () => {
            document.removeEventListener("mousedown", handleGlobalClick);
        };
    }, []);

    return (
        <S.DropDownContainer ref={dropdownRef}>
            <C.TitleBig onClick={toggleDropdown}>
                {activeItem !== null ? activeItem.name : "Оберіть групу"}
            </C.TitleBig>
            <C.TitleLight>
                {month} {year}
            </C.TitleLight>
            {isOpen && (
                <S.DropDownList>
                    {items.map((item) => (
                        <S.DropDownListItem key={item.id}>
                            <div onClick={() => handleClick(item)}>
                                {item.name}
                            </div>
                            <CloseIcon onClick={() => removeGroup(item)} />
                        </S.DropDownListItem>
                    ))}
                </S.DropDownList>
            )}
        </S.DropDownContainer>
    );
};

export { GroupDropdown };
