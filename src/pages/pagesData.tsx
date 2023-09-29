import { IRouter } from "core/types/router.types";
import { RawInfoCardProps } from "core/types/card.types";

import Home from "./Home";
import Questions from "./Questions";

import { DateRange } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

const questions: RawInfoCardProps[] = [
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
    {
        title: "Title",
        subhead: "Subhead",
        desc: "Lorem ipsum",
    },
];

const pagesData: IRouter[] = [
    {
        path: "/",
        element: <Home />,
        title: "Головна",
        showInNavbar: true,
        navbarItem: {
            label: "Головна",
            icon: <DateRange />,
        },
    },
    {
        path: "/changes",
        element: <Home />,
        title: "Зміни",
        showInNavbar: true,
        navbarItem: {
            label: "Зміни",
            icon: <StickyNote2OutlinedIcon />,
        },
    },
    {
        path: "/filter",
        element: <Home />,
        title: "Фільтр",
        showInNavbar: true,
        navbarItem: {
            label: "Фільтр",
            icon: <FilterAltOutlinedIcon />,
        },
    },
    {
        path: "/questions",
        element: <Questions cards={questions} />,
        title: "Питання",
        showInNavbar: true,
        navbarItem: {
            label: "Питання",
            icon: <QuizOutlinedIcon />,
        },
    },
    {
        path: "/account",
        element: <Home />,
        title: "Аккаунт",
        showInNavbar: false,
    },
];

export default pagesData;
