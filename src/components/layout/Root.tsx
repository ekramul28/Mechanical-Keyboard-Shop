import { Outlet } from "react-router-dom";
import Footer from "../../pages/home/footer/Footer";
import NavBar from "../../pages/home/navBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
