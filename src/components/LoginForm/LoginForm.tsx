import { LoginSchema } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "../ui/form";
import FormInputField from "../ui/FormField/FormInputField";
import { Button } from "../ui/button";

const LoginForm = () => {
  const newForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <Form {...newForm}>
        <form
          id="loginForm"
          className="flex flex-col w-2/5 p-7 rounded-md"
          onSubmit={newForm.handleSubmit(handleSubmit)}
        >
          <FormInputField
            control={newForm.control}
            name="username"
            label="Correo o documento"
            placeholder="Ingrese su correo o documento de identidad"
          />
          <FormInputField
            control={newForm.control}
            name="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            type="password"
          />

          <Button className="mt-5 w-40 self-center" type="submit">
            Ingresar
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
