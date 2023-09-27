import { IRouter } from "core/types/router.types";
import Home from "./Home";

import { DateRange } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

const pagesData: IRouter[] = [
    {
        path: "/",
        element: <Home />,
        title: "home",
        showInNavbar: true,
        navbarItem: {
            label: "Головна",
            icon: <DateRange />,
        },
    },
    {
        path: "/changes",
        element: <Home />,
        title: "changes",
        showInNavbar: true,
        navbarItem: {
            label: "Зміни",
            icon: <DateRange />,
        },
    },
    {
        path: "/filter",
        element: <Home />,
        title: "filter",
        showInNavbar: true,
        navbarItem: {
            label: "Фільтр",
            icon: <FilterAltOutlinedIcon />,
        },
    },
    {
        path: "/questions",
        element: <Home />,
        title: "questions",
        showInNavbar: true,
        navbarItem: {
            label: "Питання",
            icon: <QuizOutlinedIcon />,
        },
    },
    {
        path: "/account",
        element: <Home />,
        title: "account",
        showInNavbar: false,
    },
];

export default pagesData;
