import { useState } from "react";
import { useParams } from "react-router-dom";
import SellersList from "@/components/Sellers/SellersList/SellersList";
import AddSellerModal from "@/components/Sellers/AddSellerModal/AddSellerModal";
import { Outlet } from "react-router-dom";
import "./SellersPage.css";

const SellersPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams(); // Extraer el parámetro id de la ruta

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <section id="sellers" className="flex flex-col flex-grow bg-gray-100 p-7">
        <div className="flex justify-between">
          <h1 className="text-center text-5xl mb-9">Vendedores</h1>
          <i
            id="addIconV"
            className="bx bx-plus bx-lg cursor-pointer hover:text-orange-400"
            onClick={handleOpenModal}
          ></i>
        </div>

        {id ? (
          <Outlet />
        ) : (
          <div className="flex-grow overflow-auto bg-slate-400 rounded-sm">
            <SellersList />
          </div>
        )}
      </section>

      <AddSellerModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default SellersPage;
