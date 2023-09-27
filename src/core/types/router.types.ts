export interface IRouter {
    title: string;
    path: string;
    element: JSX.Element;
    showInNavbar: boolean;
    navbarItem?: {
        label: string;
        icon: JSX.Element;
    };
}
