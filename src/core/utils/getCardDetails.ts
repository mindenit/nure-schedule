import { CardDetailsProps } from "core/types/card.types";
import { SubjectType } from "core/types/ui.types";

export function getCardDetails(brief: SubjectType): CardDetailsProps {
    switch (brief) {
        case "Лк":
            return { avatarColor: "#5086A4", subjectType: "Лекція" };
        case "Лб":
            return {
                avatarColor: "#21005D",
                subjectType: "Лабораторна робота",
            };
        case "Пз":
            return {
                avatarColor: "#625B71",
                subjectType: "Практичне заняття",
            };
        case "Конс":
            return {
                avatarColor: "#3c838f",
                subjectType: "Консультація",
            };
        case "Зал":
            return {
                avatarColor: "#a2a734",
                subjectType: "Залік",
            };
        case "Екз":
            return {
                avatarColor: "#852b23",
                subjectType: "Екзамен",
            };
        default:
            return {
                avatarColor: "#000000",
                subjectType: "ПЕРЕВІРТЕ КОД",
            };
    }
}
