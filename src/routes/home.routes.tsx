import About from "../pages/home/aboutUs/About";
import Contact from "../pages/home/contactUs/Contact";
import Home from "../pages/home/Home/Home";

export const homeRoute = [
  {
    name: "Home",
    path: "home",
    element: <Home />,
  },
  {
    name: "Product",
    path: "product",
    element: <Home />,
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
