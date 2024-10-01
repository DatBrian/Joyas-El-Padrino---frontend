import { useState } from "react";
import { useAuthStore } from "@/store/authStore/authStore";
import { Link } from "react-router-dom";
import "./SideBarAdmin.css";

const SideBarAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const nombre = useAuthStore().name;

  return (
    <div
      id="sideBarAdmin"
      className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-28"
      }  text-white z-20`}
    >
      {/* Botón visible solo en pantallas pequeñas */}
      <button
        className={`absolute right-0 top-4 p-2 transition-transform duration-300 md:hidden`} // Solo visible en pantallas pequeñas
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={`bx bx-chevron-${
            isOpen ? "left" : "right"
          } text-white text-xl`}
        />
      </button>
      <div id="profile" className="flex flex-col items-center mt-6 mb-14">
        <i
          className={`bx bx-user-circle bx-lg text-white ${
            isOpen ? "" : "hidden md:block" // Siempre visible en pantallas grandes
          }`}
        ></i>
        {(isOpen || window.innerWidth >= 768) && (
          <h2 className="mt-2">{nombre}</h2>
        )}{" "}
        {/* Siempre muestra el nombre en pantallas grandes */}
      </div>
      <ul className="space-y-8 mt-4">
        {["dashboard", "messages", "sellers", "customers"].map((item) => (
          <li key={item} className="flex items-center">
            <Link
              to={`/admin/${item}`}
              className={`flex items-center ${
                isOpen ? "ml-2" : ""
              } hover:text-gray-400`}
            >
              {isOpen && (
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarAdmin;
