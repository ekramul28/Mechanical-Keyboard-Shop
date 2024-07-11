import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import { routeGenerator } from "../utils/routesGenerator";
import { homeRoute } from "./home.routes";
import Home from "../pages/home/Home/Home";
import Products from "../pages/productsCollection/Products";
import About from "../pages/home/aboutUs/About";
import Contact from "../pages/home/contactUs/Contact";
import ProductDetails from "../pages/productsCollection/productDetails/ProductDetails";
import Card from "../pages/Cart/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Card></Card>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
