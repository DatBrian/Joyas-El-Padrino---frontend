import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/ui/FormField/FormInputField";
import { ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "./FormContact.css";
import { IPostMessage } from "@/types";
import { postMesage } from "@/api";

const FormContact = () => {
  const newForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      mensaje: "",
    },
  });

  const handleSubmit = async (data: IPostMessage) => {
    const res = await postMesage(data);
    console.log(res);
  };

  return (
    <Form {...newForm}>
      <form
        id="contact-form"
        onSubmit={newForm.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-lg p-6 md:p-8 lg:p-10 bg-white rounded-md shadow-md"
      >
        <FormInputField
          control={newForm.control}
          name="nombre"
          label="Nombre"
          placeholder="Ingrese su nombre"
          className="w-full"
        />

        <FormInputField
          control={newForm.control}
          name="telefono"
          label="Teléfono"
          type="number"
          placeholder="Ingrese su teléfono - Whatsapp"
          className="w-full"
        />

        <FormInputField
          control={newForm.control}
          name="mensaje"
          label="Mensaje"
          placeholder="Ingrese un mensaje (opcional)"
          className="w-full"
        />

        <Button className="mt-4 w-full sm:w-auto self-center" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default FormContact;
