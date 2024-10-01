import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IAddPaymentModalProps } from "./AddPaymentModal.types";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PagoSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/ui/FormField/FormInputField";
import { Form } from "@/components/ui/form";
import { IPostPago } from "@/types";
import { postPago } from "@/api";

const AddPaymentModal: React.FC<IAddPaymentModalProps> = ({
  isOpen,
  onClose,
  saldoId,
  onPaymentAdded,
}) => {
  const newForm = useForm<z.infer<typeof PagoSchema>>({
    resolver: zodResolver(PagoSchema),
    defaultValues: {
      saldo_id: saldoId,
      fecha: new Date().toISOString(),
      cantidad: "",
    },
  });

  useEffect(() => {
    newForm.reset({
      saldo_id: saldoId,
      fecha: new Date().toISOString(),
      cantidad: "",
    });
  }, [newForm, saldoId]);

  const handleSubmit = async (data: IPostPago) => {
    try {
      const res = await postPago(data);
      console.log(res);
      newForm.reset();
      if (onPaymentAdded) await onPaymentAdded();
      onClose();
    } catch (error) {
      alert("error");
      console.error("Error al agregar pago", error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Agregar Nuevo Pago</h2>
        <Form {...newForm}>
          <form id="sellerForm" onSubmit={newForm.handleSubmit(handleSubmit)}>
            <FormInputField
              control={newForm.control}
              name="cantidad"
              label="Cantidad"
              placeholder="Ingrese el valor del pago"
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

export default AddPaymentModal;
