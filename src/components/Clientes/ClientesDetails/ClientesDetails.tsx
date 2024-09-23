import { useEffect, useState } from "react";
import { getUserDetails } from "@/api/users";
import { IGetCompra, IGetSellerDetails } from "@/types";
import { useParams } from "react-router-dom";
import "./clientesDetails.css";
import { Button } from "@/components/ui/button";
import AddSaldoModal from "@/components/Modals/AddSaldoModal/AddSaldoModal";

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<IGetSellerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [compras, setCompras] = useState<IGetCompra[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchclientDetails = async () => {
      try {
        const result = await getUserDetails(id);
        setCompras(result.saldos);
        console.log(compras);

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
  }, [compras, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!client) return <div>No client details found.</div>;

  return (
    <>
      <section className="w-full bg-black p-3 rounded-lg grid grid-cols-4 grid-rows-4 gap-1">
        <div className=" text-white py-4 rounded-lg row-span-2 text-center">
          <i id="userIcon" className="bx bxs-user-circle mt-2n "></i>
          <div className="flex flex-col mt-6 gap-y-3">
            <h1 className="text-3xl font-black">{client.nombre}</h1>
            <h2>{client.correo}</h2>
            <div id="userOptions" className="flex flex-col">
              <Button variant={"destructive"}>Eliminar Usuario</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-20 gap-y-8 px-10 py-16  flex-wrap  text-white rounded-lg row-span-2 col-span-2">
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
        <div className="flex flex-col py-10 gap-y-8 text-center text-white rounded-lg row-span-2">
          <div id="compras" className="mt-5">
            <h2>Compras Totales</h2>
            <h1 className="text-5xl">$0</h1>
            <Button
              className="mt-10"
              variant={"secondary"}
              onClick={() => setIsModalOpen(true)}
            >
              Nueva Compra
            </Button>
          </div>
        </div>
        <div className=" text-white rounded-lg row-span-2 col-span-4">
          <div className="bg-slate-500 m-3 rounded-lg text-center p-2">
            Compras
          </div>
          <div
            id="comprasContainer"
            className="grid grid-cols-4 overflow-auto m-3 rounded-lg bg-slate-500 p-4"
          >
            {compras.length === 0 ? (
              <div className="text-center text-gray-300 col-span-4">
                No hay compras registradas.
              </div>
            ) : (
              compras.map((compra, index) => (
                <div
                  key={index}
                  className="bg-white col-span-4  rounded-lg p-4 shadow-md 
                  "
                >
                  <h3 className="font-bold text-lg mb-2">
                    {compra.descripcion}
                  </h3>
                  <p className="text-gray-600">
                    Fecha:{" "}
                    <span className="font-semibold">
                      {new Date(compra.fecha).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Valor:{" "}
                    <span className="font-semibold">
                      ${compra.valor.toLocaleString("COP")}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Saldo Actual:{" "}
                    <span className="font-semibold">
                      ${compra.saldo_actual.toLocaleString("COP")}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Estado:{" "}
                    <span
                      className={`font-semibold ${
                        compra.estado === "ACTIVE"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {compra.estado}
                    </span>
                  </p>
                </div>
              ))
            )}
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
