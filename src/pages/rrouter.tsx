import { Route, Routes } from "react-router-dom";

import { IRouter } from "core/types/router.types";

import pagesData from "./pagesData";

const Router: React.FC = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: IRouter) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};

export default Router;

/*

 * It seems to me that the application routing structure will change more than once
 * because of the need to pass some data to the pages,
 * but at this stage it is realistic to use this structure.
 * We'll see.

*/
