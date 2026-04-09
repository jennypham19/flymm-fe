import Loadable from "@/components/Loadable";
import { ROUTE_PATH } from "@/constants/routes";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Home = Loadable(lazy(() => import('@/views/Manage/Home/index')));

const manageRoutes: RouteObject[] = [
    { path: ROUTE_PATH.MANAGE_HOME, element: <Home/>}
]

export default manageRoutes;