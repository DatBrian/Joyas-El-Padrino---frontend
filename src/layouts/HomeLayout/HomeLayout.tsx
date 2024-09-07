import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Nav/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="mb-20">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
