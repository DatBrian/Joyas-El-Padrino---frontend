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
    <>
      <Form {...newForm}>
        <form
          id="contact-form"
          onSubmit={newForm.handleSubmit(handleSubmit)}
          className="flex flex-col gap-3 w-2/5 p-7 rounded-md"
        >
          <FormInputField
            control={newForm.control}
            name="nombre"
            label="Nombre"
            placeholder="Ingrese su nombre"
          />

          <FormInputField
            control={newForm.control}
            name="telefono"
            label="Teléfono"
            type="number"
            placeholder="Ingrese su teléfono - Whatsapp"
          />

          <FormInputField
            control={newForm.control}
            name="mensaje"
            label="Mensaje"
            placeholder="Ingrese un mensaje (opcional)"
          />

          <Button className="mt-5 w-40 self-center" type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormContact;
