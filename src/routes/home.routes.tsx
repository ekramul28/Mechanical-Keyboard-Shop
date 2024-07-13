import About from "../pages/home/aboutUs/About";
import Contact from "../pages/home/contactUs/Contact";
import Home from "../pages/home/Home/Home";
import Products from "../pages/productsCollection/Products";
import ProductDetails from "../pages/productsCollection/productDetails/ProductDetails";

export const homeRoute = [
  {
    name: "Home",
    path: "home",
    element: <Home />,
  },
  {
    name: "Product",
    path: "product",
    element: <Products />,
    children: [
      {
        path: ":id",
        element: <ProductDetails />,
      },
    ],
  },

  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];
