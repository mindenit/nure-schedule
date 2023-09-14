import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as S from "./List.styles";
import { ListItem } from "./Item/Item";
import { ListAction } from "./Action/Action";
import { ListHeader } from "./Header/Header";

interface ListProps extends ComponentPropsWithoutRef<"section"> {}

const ListRoot = forwardRef<ElementRef<"section">, ListProps>(({ ...props }, ref) => {
  return <S.StyledList ref={ref} {...props} />
});

ListRoot.displayName = "ListRoot"

export const List = { ...{
  Action: ListAction,
  Header: ListHeader,
  Item: ListItem,
  Root: ListRoot,
}};
