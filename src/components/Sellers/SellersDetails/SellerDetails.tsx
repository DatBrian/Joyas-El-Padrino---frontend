import { getSelelrDetails } from "@/api/sellers";
import { useParams } from "react-router-dom";

const SellerDetails = () => {
  const { id } = useParams();

    const seller = getSelelrDetails(id);

  return (
    <div className="p-4 flex-grow overflow-auto bg-slate-400 rounded-sm text-center">
      <h1 className="text-3xl font-bold mb-4">{seller.nombre}</h1>
      <p>
        <strong>id:</strong> {seller._id}
      </p>
      <p>
        <strong>Rol:</strong> {seller.rol}
      </p>
      <p>
        <strong>Cédula:</strong> {seller.cedula}
      </p>
      <p>
        <strong>Dirección:</strong> {seller.direccion}
      </p>
      <p>
        <strong>Teléfono:</strong> {seller.telefono}
      </p>
      <p>
        <strong>Correo:</strong> {seller.correo}
      </p>
      {/* Añade más detalles aquí */}
    </div>
  );
};

export default SellerDetails;
