import React from "react";
import { IAddSaldoModalProps } from "./AddSaldoModal.types";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SaldoSchema } from "@/schemas/SaldoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IPostSaldo } from "@/types";
import { postSaldo } from "@/api";
import { useParams } from "react-router-dom";
import FormInputField from "@/components/ui/FormField/FormInputField";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const AddSaldoModal: React.FC<IAddSaldoModalProps> = ({ isOpen, onClose }) => {
  const { id } = useParams();
  const newForm = useForm<z.infer<typeof SaldoSchema>>({
    resolver: zodResolver(SaldoSchema),
    defaultValues: {
      cliente_id: id,
      fecha: new Date(),
      descripcion: "",
      valor: "",
      cuotas: "",
    },
  });

  const handleSubmit = async (data: IPostSaldo) => {
    try {
      const res = await postSaldo(data);
      console.log(res);

      newForm.reset();
      onClose();
    } catch (error) {
      alert("error");
      console.error("Error al agregar saldo:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Agregar Nuevo Usuario</h2>
        <Form {...newForm}>
          <form id="sellerForm" onSubmit={newForm.handleSubmit(handleSubmit)}>
            <FormInputField
              control={newForm.control}
              name="descripcion"
              label="Descripción de la compra"
              placeholder="Ingrese la descripción de la compra"
              className="w-full"
            />
            <FormInputField
              control={newForm.control}
              name="valor"
              label="Valor"
              placeholder="Ingrese el valor total de la compra"
              className="w-full"
              type="number"
            />
            <FormInputField
              control={newForm.control}
              name="cuotas"
              label="Cuotas"
              placeholder="Ingrese la cantidad de cuotas"
              className="w-full"
              type="number"
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

export default AddSaldoModal;
