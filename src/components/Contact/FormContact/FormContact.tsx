import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/ui/FormField/FormInputField";
import { ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "./FormContact.css";

const FormContact = () => {
  const newForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = () => {};

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
            name="name"
            label="Nombre"
            placeholder="Ingrese su nombre"
          />

          <FormInputField
            control={newForm.control}
            name="email"
            label="Correo"
            type="email"
            placeholder="Ingrese su correo"
          />

          <FormInputField
            control={newForm.control}
            name="phone"
            label="Teléfono"
            type="number"
            placeholder="Ingrese su teléfono - Whatsapp"
          />

          <FormInputField
            control={newForm.control}
            name="message"
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
