import { useState } from "react";
import { useParams } from "react-router-dom";
import UsersList from "@/components/ui/Users/UsersList/UsersList";
import AddUserModal from "@/components/Modals/AddUserModal/AddUserModal";
import { Outlet } from "react-router-dom";
import "./SellersPage.css";
import { useUsersStore } from "@/store/usersStore/usersStore";

const SellersPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const sellers = useUsersStore((state) => state.allSellers);

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
            <UsersList users={sellers} typeUser="sellers" />
          </div>
        )}
      </section>

      <AddUserModal
        rol="seller"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SellersPage;
