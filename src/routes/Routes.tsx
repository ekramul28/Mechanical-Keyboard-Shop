import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import { routeGenerator } from "../utils/routesGenerator";
import { homeRoute } from "./home.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: routeGenerator(homeRoute),
  },
]);

export default router;
