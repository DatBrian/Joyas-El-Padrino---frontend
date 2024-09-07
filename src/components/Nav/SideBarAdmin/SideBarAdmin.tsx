import React, { useState } from "react";
import { useAuthStore } from "@/store/authStore/authStore";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const nombre = useAuthStore().name;

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-28"
      } bg-gray-800 text-white z-20`}
    >
      <button
        className={`absolute right-0 top-4 p-2 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
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
            isOpen ? "" : "hidden"
          }`}
        ></i>
        {isOpen && <h2 className="mt-2">{nombre}</h2>}
      </div>
      <ul className="space-y-8 mt-4">
        <li className="flex items-center">
          <Link
            to="/admin/dashboard"
            className={`flex items-center ${
              isOpen ? "ml-2" : ""
            } hover:text-gray-400`}
          >
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="/admin/messages"
            className={`flex items-center ${
              isOpen ? "ml-2" : ""
            } hover:text-gray-400`}
          >
            {isOpen && <span>Mensajes</span>}
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="/admin/sellers"
            className={`flex items-center ${
              isOpen ? "ml-2" : ""
            } hover:text-gray-400`}
          >
            {isOpen && <span>Vendedores</span>}
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="/admin/customers"
            className={`flex items-center ${
              isOpen ? "ml-2" : ""
            } hover:text-gray-400`}
          >
            {isOpen && <span>Clientes</span>}
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="/admin/products"
            className={`flex items-center ${
              isOpen ? "ml-2" : ""
            } hover:text-gray-400`}
          >
            {isOpen && <span>Productos</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
