import { LoginSchema } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "../../ui/form";
import FormInputField from "../../ui/FormField/FormInputField";
import { Button } from "../../ui/button";
import { IUserLogin } from "@/types";
import { loginRequest } from "@/api";
import { useAuthStore } from "@/store/authStore/authStore";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "@/utils";

const LoginForm = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setName = useAuthStore((state) => state.setProfile);
  const setId = useAuthStore((state) => state.setId);
  const navigate = useNavigate();
  const newForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      contraseña: "",
    },
  });

  const setAuthValues = (token: string, name: string) => {
    const id = decodeToken(token).sub;
    setId(id);
    setToken(token);
    setName(name);
  };

  const handleSubmit = async (data: IUserLogin) => {
    const resLogin = await loginRequest(data);
    console.log(resLogin);

    const token = resLogin.data.token;
    const name = resLogin.data.usuario.name;
    setAuthValues(token, name);
    navigate("/admin");
  };

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
            name="contraseña"
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
