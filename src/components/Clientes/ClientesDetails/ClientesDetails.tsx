import { useEffect, useState } from "react";
import { getUserDetails } from "@/api/users";
import { IGetCompra, IGetSellerDetails } from "@/types";
import { useParams } from "react-router-dom";
import "./ClientesDetails.css";
import { Button } from "@/components/ui/button";
import AddSaldoModal from "@/components/Modals/AddSaldoModal/AddSaldoModal";
import AddPaymentModal from "@/components/Modals/AddPaymentModal/AddPaymentModal";

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<IGetSellerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [compras, setCompras] = useState<IGetCompra[]>([]);
  const [totalCompras, setTotalCompras] = useState<number>(0);
  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
  const [saldoId, setSaldoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPagos, setTotalPagos] = useState<number>(0);

  const fetchclientDetails = async () => {
    try {
      const result = await getUserDetails(id);
      setCompras(result.saldos || []);
      setClient(result || null);
      const total = result.saldos.reduce(
        (acc: number, compra: IGetCompra) => acc + compra.valor,
        0
      );
      setTotalCompras(total);

      const totalPagos = result.saldos.reduce(
        (acc: number, compra: IGetCompra) => {
          return acc + (compra.pagos ? compra.pagos.length : 0);
        },
        0
      );
      setTotalPagos(totalPagos);
    } catch (err) {
      setError("Error fetching client details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchclientDetails();
    }
  }, [id]);

  const handleNewPaymentClick = (id: string) => {
    setSaldoId(id);
    setIsAddPaymentModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!client) return <div>No client details found.</div>;

  return (
    <>
      <section
        id="clientesDetails"
        className="w-full p-3 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-1"
      >
        <div className="bg-white text-black py-4 rounded-lg row-span-1 text-center col-span-4 md:col-span-1 md:row-span-2">
          <i id="userIcon" className="bx bxs-user-circle mt-2n"></i>
          <div className="flex flex-col mt-6 gap-y-3">
            <h1 className="text-3xl font-bold">{client.nombre}</h1>
            <h2>{client.correo}</h2>
            <div id="userOptions" className="flex flex-col items-center">
              <Button id="userDeleteButton">Eliminar Usuario</Button>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col px-10 py-16 flex-wrap gap-y-14 text-black rounded-lg row-span-2 col-span-4 md:col-span-2">
          <div className="flex flex-wrap">
            <div className="infoItem w-full md:w-1/2">
              <h1 className="font-bold">Documento:</h1>
              <h3>{client.cedula}</h3>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="infoItem font-bold">Teléfono:</h1>
              <h3>{client.telefono}</h3>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="infoItem w-full md:w-1/2">
              <h1 className="font-bold">Dirección:</h1>
              <h3>{client.direccion}</h3>
            </div>
            <div className="infoItem w-full md:w-1/2">
              <h1 className="font-bold">Fecha de registro:</h1>
              <h3>{new Date(client.createdAt).toLocaleDateString()}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-10 gap-y-8 text-center text-black rounded-lg row-span-2 col-span-4 md:col-span-1">
          <div id="compras" className="mt-5">
            <h2>Compras Totales</h2>
            <h1 className="text-5xl">${totalCompras.toLocaleString("COP")}</h1>
            <Button
              id="compraButton"
              className="mt-10"
              onClick={() => setIsModalOpen(true)}
            >
              Nueva Compra
            </Button>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg row-span-2 col-span-4 md:col-span-4 md:row-span-4 md:h-auto h-max ">
          <div className="m-3 rounded-lg text-center p-2">
            <h1 className="text-2xl font-bold">Compras</h1>
          </div>
          <div
            id="comprasContainer"
            className="overflow-auto m-3 rounded-lg p-4"
          >
            {compras.length === 0 ? (
              <div className="text-center text-gray-300">
                No hay compras registradas.
              </div>
            ) : (
              compras.map((compra, index) => (
                <div
                  key={index}
                  className="compra bg-white flex items-center justify-between rounded-lg p-4 shadow-md mb-2 flex-wrap"
                >
                  <div className="compraButtons flex gap-x-4">
                    <i
                      className="pagoIcon bx bxs-add-to-queue p-2 rounded-full"
                      onClick={() => handleNewPaymentClick(compra._id)}
                    ></i>
                    <i
                      className="cancelIcon bx bx-x p-2 rounded-full"
                      onClick={() => handleNewPaymentClick(compra._id)}
                    ></i>
                  </div>

                  <span className="font-semibold text-black text-xl">
                    {new Date(compra.fecha).toLocaleDateString()}
                  </span>
                  <h3 className="font-semibold text-xl text-black mb-2">
                    {compra.descripcion}
                  </h3>
                  <div>
                    <p className="text-gray-600">Valor</p>
                    <span className="font-semibold text-black">
                      ${compra.valor.toLocaleString("COP")}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600">Saldo Actual</p>
                    <span className="font-semibold text-black">
                      ${compra.saldo_actual.toLocaleString("COP")}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600">Cuotas</p>
                    <span className="font-semibold text-black">
                      {totalPagos}/{compra.cuotas}
                    </span>
                  </div>
                  <span className={`font-semibold text-black ${compra.estado}`}>
                    {compra.estado}
                  </span>
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
      <AddPaymentModal
        isOpen={isAddPaymentModalOpen}
        onClose={() => setIsAddPaymentModalOpen(false)}
        saldoId={saldoId}
        onPaymentAdded={fetchclientDetails}
      />
    </>
  );
};

export default ClientDetails;
