import { useEffect, useState } from "react";
import { getSellerDetails } from "@/api/users";
import { Cliente, IGetSellerDetails } from "@/types";
import { useParams } from "react-router-dom";
import "./SellerDetails.css";

const SellerDetails = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState<IGetSellerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ventas, setVentas] = useState<Cliente[] | undefined>([]);
  const [compras, setCompras] = useState<unknown[] | undefined>([]);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const result = await getSellerDetails(id);
        setVentas(result?.clientes);
        setCompras(result?.saldos);
        console.log(ventas);
        console.log(compras);

        setSeller(result || null);
        console.log(seller);
      } catch (err) {
        setError("Error fetching seller details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSellerDetails();
    }
  }, [id, seller]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!seller) return <div>No seller details found.</div>;

  return (
    <>
      <section className="bg-blue-200 p-3 rounded-lg grid grid-cols-4 grid-rows-4 gap-1">
        <div className="bg-blue-500 text-white py-4 rounded-lg row-span-2 text-center">
          <i id="userIcon" className="bx bxs-user-circle mt-2n "></i>
          <div className="flex flex-col mt-6 gap-y-3">
            <h1 className="text-3xl font-black">{seller.nombre}</h1>
            <h2>{seller.correo}</h2>
          </div>
        </div>
        <div className="flex gap-x-20 gap-y-8 px-10 py-16  flex-wrap  bg-blue-500 text-white rounded-lg row-span-2 col-span-2">
          <div>
            <h1>Documento:</h1>
            <h3>{seller.cedula}</h3>
          </div>
          <div>
            <h1>Teléfono:</h1>
            <h3>{seller.telefono}</h3>
          </div>
          <div>
            <h1>Dirección:</h1>
            <h3>{seller.direccion}</h3>
          </div>
          <div>
            <h1>Fecha de registro:</h1>
            <h3>{new Date(seller.createdAt).toLocaleDateString()}</h3>
          </div>
          <div>
            <h1>Rol:</h1>
            <h3>{seller.rol}</h3>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-y-8 bg-blue-500 text-center text-white rounded-lg row-span-2">
          <div id="ventas">
            <h2>Ventas Totales</h2>
            <h1 className="text-5xl">$0</h1>
          </div>
          <div id="compras">
            <h2>Compras Totales</h2>
            <h1 className="text-5xl">$0</h1>
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
        <div className="bg-blue-500 text-white py-4 rounded-lg row-span-2 col-span-2">
          5
        </div>
      </section>
    </>
  );
};

export default SellerDetails;
