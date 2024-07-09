import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../pages/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
