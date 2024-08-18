import { useState } from "react";
import Link from "../Link/Link";
import "./NavBar.css";
import LinkMenu from "../LinkMenu/LinkMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" relative z-20 flex justify-between items-center text-black h-20 px-8 md:px-32 drop-shadow-md">
        <div id="logo">
          <h1>El Padrino</h1>
        </div>
        <div className="hidden xl:flex items-center gap-7 font-semibold text-base h-full">
          <Link to={"/"}>Home</Link>
          <Link to={"/a"}>Servicios</Link>
          <Link to={"/b"}>Sobre Nosotros</Link>
          <Link to={"/c"}>Contactános</Link>
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          id="menu"
          className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center  font-semibold text-lg transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <LinkMenu to={"/"}>Home</LinkMenu>
          <LinkMenu to={"/"}>Home</LinkMenu>
          <LinkMenu to={"/"}>Home</LinkMenu>
          <LinkMenu to={"/"}>Home</LinkMenu>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
