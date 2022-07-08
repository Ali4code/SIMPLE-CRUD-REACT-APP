// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Detials";
import NotFound from "./components/NotFound";

// other
import {FC} from "react";


// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'create-route',
        title: 'Create',
        path: '/create',
        enabled: true,
        component: Create
    },
    {
        key: 'details-route',
        title: 'Post Details',
        path: '/details/:id',
        enabled: true,
        component: Details
    },
    {
        key: 'Not-route',
        title: 'Item Details',
        path: "*",
        enabled: true,
        component: NotFound
    },
]