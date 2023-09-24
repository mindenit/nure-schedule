import { IRouter } from "core/types/router.types";
import Home from "./Home";

const pagesData: IRouter[] = [
    {
        path: "",
        element: <Home />,
        title: "home",
    },
];

export default pagesData;
