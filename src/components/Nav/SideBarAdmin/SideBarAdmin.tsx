import { useAuthStore } from "@/store/authStore/authStore";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  const nombre = useAuthStore().name;
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0 z-20">
      <div id="profile" className="flex flex-col items-center mt-6 mb-14">
        <i className="bx bx-user-circle bx-lg text-white"></i>
        <h2>{nombre}</h2>
      </div>
      <ul className="space-y-8">
        <li>
          <Link to="/admin/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/messages" className="hover:text-gray-400">
            Mensajes
          </Link>
        </li>
        <li>
          <Link to="/admin/sellers" className="hover:text-gray-400">
            Vendedores
          </Link>
        </li>
        <li>
          <Link to="/admin/customers" className="hover:text-gray-400">
            Clientes
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="hover:text-gray-400">
            Productos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
