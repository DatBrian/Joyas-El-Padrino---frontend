import AddUserModal from "@/components/Modals/AddUserModal/AddUserModal";
import UsersList from "@/components/ui/Users/UsersList/UsersList";
import { useUsersStore } from "@/store/usersStore/usersStore";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const ClientesPage = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const clients = useUsersStore((state) => state.allClients);

  return (
    <>
      <section className="flex flex-col flex-grow bg-gray-100 p-7">
        <div className="flex justify-between">
          <h1 className="text-center text-5xl mb-9">Clientes</h1>
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
            <UsersList typeUser="customers" users={clients} />
          </div>
        )}
      </section>

      <AddUserModal
        rol="client"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ClientesPage;
