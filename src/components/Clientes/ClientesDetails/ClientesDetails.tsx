import { useEffect, useState } from "react";
import { getUserDetails } from "@/api/users";
import { IGetSellerDetails } from "@/types";
import { useParams } from "react-router-dom";
import "./clientesDetails.css";
import { Button } from "@/components/ui/button";
import AddSaldoModal from "@/components/Modals/AddSaldoModal/AddSaldoModal";

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<IGetSellerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [compras, setCompras] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchclientDetails = async () => {
      try {
        const result = await getUserDetails(id);
        setClient(result || null);
      } catch (err) {
        setError("Error fetching client details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchclientDetails();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!client) return <div>No client details found.</div>;

  return (
    <>
      <section className="bg-blue-200 p-3 rounded-lg grid grid-cols-4 grid-rows-4 gap-1">
        <div className="bg-blue-500 text-white py-4 rounded-lg row-span-2 text-center">
          <i id="userIcon" className="bx bxs-user-circle mt-2n "></i>
          <div className="flex flex-col mt-6 gap-y-3">
            <h1 className="text-3xl font-black">{client.nombre}</h1>
            <h2>{client.correo}</h2>
            <div id="userOptions" className="flex flex-col">
              <Button variant={"destructive"}>Eliminar Usuario</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-20 gap-y-8 px-10 py-16  flex-wrap  bg-blue-500 text-white rounded-lg row-span-2 col-span-2">
          <div>
            <h1>Documento:</h1>
            <h3>{client.cedula}</h3>
          </div>
          <div>
            <h1>Teléfono:</h1>
            <h3>{client.telefono}</h3>
          </div>
          <div>
            <h1>Dirección:</h1>
            <h3>{client.direccion}</h3>
          </div>
          <div>
            <h1>Fecha de registro:</h1>
            <h3>{new Date(client.createdAt).toLocaleDateString()}</h3>
          </div>
          <div>
            <h1>Rol:</h1>
            <h3>{client.rol}</h3>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-y-8 bg-blue-500 text-center text-white rounded-lg row-span-2">
          <div id="compras" className="mt-5">
            <h2>Compras Totales</h2>
            <h1 className="text-5xl">${compras}</h1>
            <Button
              className="mt-10"
              variant={"secondary"}
              onClick={() => setIsModalOpen(true)}
            >
              Nueva Compra
            </Button>
          </div>
        </div>
        <div className="bg-blue-500 text-white rounded-lg row-span-2 col-span-2">
          <div className="bg-slate-500 m-3 rounded-lg text-center p-2">
            Compras
          </div>
          <div
            id="comprasContainer"
            className="overflow-auto m-3 rounded-lg bg-slate-500"
          >
            <div className="bg-white m-2 rounded-lg"></div>
          </div>
        </div>
        <div className="bg-blue-500 text-white  rounded-lg row-span-2 col-span-2">
          <div className="bg-slate-500 m-3 rounded-lg text-center p-2">
            Pagos
          </div>
          <div
            id="pagosContainer"
            className="overflow-auto m-3 rounded-lg bg-slate-500"
          >
            <div className="bg-white m-2 rounded-lg"></div>
          </div>
        </div>
      </section>
      <AddSaldoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ClientDetails;
