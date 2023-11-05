import { SubjectType } from "core/types/ui.types";

export const getSubjectType = (brief: SubjectType) => {
    switch (brief) {
        case "Лк":
            return "Лекція";
        case "Лб":
            return "Лабораторна робота";
        case "Пз":
            return "Практичне заняття";
    }
};
