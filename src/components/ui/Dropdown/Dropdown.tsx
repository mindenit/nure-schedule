import { useState, useEffect, useRef } from "react";
// import { IAuditorium, IGroup, ITeacher } from "nurekit";

import * as C from "styles/components";
import * as S from "./Dropdown.styles";

import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useActions } from "core/hooks/useActions";
import { ICommonData } from "core/types/data.types";

interface Props {
    items: ICommonData[];
    activeItem: ICommonData | null;
    month: string;
    year: number | string;
    onItemRemove?: () => void;
    onChange?: (item: ICommonData) => void;
}

const Dropdown: React.FC<Props> = ({
    items,
    activeItem,
    month,
    year,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { setActiveItem, removeItem } = useActions();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = (item: ICommonData) => {
        setActiveItem(item);
        setIsOpen(false);
        if (onChange) onChange(item);
    };
    const handleGlobalClick = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        )
            setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) document.addEventListener("mousedown", handleGlobalClick);
        else document.removeEventListener("mousedown", handleGlobalClick);

        return () => {
            document.removeEventListener("mousedown", handleGlobalClick);
        };
    }, [isOpen]);

    return (
        <S.DropDownContainer ref={dropdownRef} onClick={toggleDropdown}>
            <div>
                <C.TitleBig>
                    {activeItem !== null ? activeItem.name : "Оберіть елемент"}
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
                                <CloseIcon onClick={() => removeItem(item)} />
                            </S.DropDownListItem>
                        ))}
                    </S.DropDownList>
                )}
            </div>
            <ArrowRightIcon />
        </S.DropDownContainer>
    );
};

export { Dropdown };
