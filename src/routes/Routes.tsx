import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../pages/home/Home/Home";
import Products from "../pages/productsCollection/Products";
import About from "../pages/home/aboutUs/About";
import Contact from "../pages/home/contactUs/Contact";
import ProductDetails from "../pages/productsCollection/productDetails/ProductDetails";
import Card from "../pages/Cart/Card";
import Checkout from "../pages/checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "checkout",
        element: <Checkout />,
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
