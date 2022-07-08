// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import ItemDetails from "./pages/ItemDetials";

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
        key: 'itemDetails-route',
        title: 'Item Details',
        path: '/item-details',
        enabled: true,
        component: ItemDetails
    }
]