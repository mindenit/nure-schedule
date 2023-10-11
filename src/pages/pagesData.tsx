import { IRouter } from "core/types/router.types";

import Home from "./Home";
import Questions from "./Questions";
import NotFound from "./NotFound";
import SignIn from "./SignIn";

import { DateRange } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

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
        element: <NotFound />,
        title: "Зміни",
        showInNavbar: true,
        navbarItem: {
            label: "Зміни",
            icon: <StickyNote2OutlinedIcon />,
        },
    },
    {
        path: "/filter",
        element: <NotFound />,
        title: "Фільтр",
        showInNavbar: true,
        navbarItem: {
            label: "Фільтр",
            icon: <FilterAltOutlinedIcon />,
        },
    },
    {
        path: "/questions",
        element: <Questions />,
        title: "Питання",
        showInNavbar: true,
        navbarItem: {
            label: "Питання",
            icon: <QuizOutlinedIcon />,
        },
    },
    {
        path: "/account",
        element: <NotFound />,
        title: "Аккаунт",
        showInNavbar: false,
    },
    {
        path: "/signin",
        element: <SignIn />,
        title: "Увійти в аккаунт",
        showInNavbar: false,
    },
];

export default pagesData;
