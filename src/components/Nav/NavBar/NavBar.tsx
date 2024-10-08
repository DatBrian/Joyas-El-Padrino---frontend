import { useState } from "react";
import "./NavBar.css";
import LinkMenu from "../LinkMenu/LinkMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" fixed w-full z-30 flex justify-between items-center text-white h-20 px-8 md:px-32 drop-shadow-md">
        <div id="logo"></div>
        <div className="hidden xl:flex items-center gap-7 font-semibold text-base h-full">
          <Link className="navLinkBtn" to={"/"}>
            Home
          </Link>
          <Link className="navLinkBtn" to={"/services"}>
            Servicios
          </Link>
          <Link className="navLinkBtn" to={"/about"}>
            About
          </Link>
          <Link className="navLinkBtn" to={"/contact"}>
            Contacto
          </Link>

          <Link to={"/login"} className="Btn">
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>

            <div className="text">Login</div>
          </Link>
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          id="menu"
          className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center  font-semibold text-lg transform ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <LinkMenu onClick={() => setIsMenuOpen(false)} to={"/"}>
            Home
          </LinkMenu>
          <LinkMenu onClick={() => setIsMenuOpen(false)} to={"/services"}>
            Servicios
          </LinkMenu>
          <LinkMenu onClick={() => setIsMenuOpen(false)} to={"/about"}>
            About
          </LinkMenu>
          <LinkMenu onClick={() => setIsMenuOpen(false)} to={"/contact"}>
            Contacto
          </LinkMenu>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
