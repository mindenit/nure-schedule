import { IRouter } from "core/types/router.types";

import Home from "./Home";
import Questions from "./Questions";
import SignIn from "./SignIn";

import { DateRange } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import { ChangesPage } from "./ChangesPage";
import { FiltersPage } from "./Filters/FiltersPage";
import { SignupPage } from "./SignupPage";
import { AccountPage } from "./AccountPage";

// import { RawInfoCardProps } from "core/types/card.types";

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
        element: <ChangesPage />,
        title: "Зміни",
        showInNavbar: true,
        navbarItem: {
            label: "Зміни",
            icon: <StickyNote2OutlinedIcon />,
        },
    },
    {
        path: "/filter",
        element: <FiltersPage />,
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
        element: <AccountPage />,
        title: "Аккаунт",
        showInNavbar: false,
    },
    {
        path: "/signin",
        element: <SignIn />,
        title: "Увійти в аккаунт",
        showInNavbar: false,
    },
    {
        path: "/signup",
        element: <SignupPage />,
        title: "Зареєструватися",
        showInNavbar: false,
    },
];

export default pagesData;
