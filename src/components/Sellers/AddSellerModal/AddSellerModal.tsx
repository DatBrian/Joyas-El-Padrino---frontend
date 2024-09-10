import { postSeller } from "@/api/sellers";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/ui/FormField/FormInputField";
import { SellerSchema } from "@/schemas/SellerSchema";
import { IPostUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const AddSellerModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const newForm = useForm<z.infer<typeof SellerSchema>>({
    resolver: zodResolver(SellerSchema),
    defaultValues: {
      nombre: "",
      cedula: "",
      direccion: "",
      telefono: "",
      correo: "",
      contraseña: "",
      rol: "seller",
    },
  });

  const handleSubmit = async (data: IPostUser) => {
    await postSeller(data);

    newForm.reset();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Agregar Nuevo Vendedor</h2>
        <Form {...newForm}>
          <form id="sellerForm" onSubmit={newForm.handleSubmit(handleSubmit)}>
            <FormInputField
              control={newForm.control}
              name="nombre"
              label="Nombre"
              placeholder="Ingrese el nombre"
              className="w-full"
            />
            <FormInputField
              control={newForm.control}
              name="cedula"
              label="Documento"
              placeholder="Ingrese el documento de identidad"
              className="w-full"
              type="number"
            />
            <FormInputField
              control={newForm.control}
              name="direccion"
              label="Dirección"
              placeholder="Ingrese la dirección"
              className="w-full"
            />
            <FormInputField
              control={newForm.control}
              name="telefono"
              label="Teléfono"
              placeholder="Ingrese el número de teléfono"
              className="w-full"
              type="number"
            />
            <FormInputField
              control={newForm.control}
              name="correo"
              label="Correo"
              placeholder="Ingrese el correo electrónico"
              className="w-full"
              type="email "
            />

            <FormInputField
              control={newForm.control}
              name="contraseña"
              label="Contraseña"
              placeholder="Ingrese la contraseña"
              className="w-full"
            />
            <div className="flex justify-center mt-7">
              <Button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Guardar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

// <form>
//   <div className="mb-4">
//     <label className="block text-gray-700">Nombre</label>
//     <input
//       type="text"
//       className="w-full p-2 border border-gray-300 rounded-md"
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block text-gray-700">Cédula</label>
//     <input
//       type="text"
//       className="w-full p-2 border border-gray-300 rounded-md"
//     />
//   </div>
//   {/* Añade más campos según necesites */}
//   <div className="flex justify-end">
//     <button
//       type="button"
//       onClick={onClose}
//       className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
//     >
//       Cancelar
//     </button>
//     <button
//       type="submit"
//       className="bg-blue-500 text-white px-4 py-2 rounded-md"
//     >
//       Guardar
//     </button>
//   </div>
// </form>;

export default AddSellerModal;
