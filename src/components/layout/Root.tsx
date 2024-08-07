import { Outlet } from "react-router-dom";
import Footer from "../../pages/home/footer/Footer";
import NavBar from "../../pages/home/navBar/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className="container primary-color ">
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
