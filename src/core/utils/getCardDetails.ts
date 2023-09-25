import { SubjectType, CardDetailsProps } from "core/interfaces/card.types";

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
    }
}
