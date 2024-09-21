import * as z from "zod";

export const SellerSchema = z.object({
  vendedor_id: z.string().optional(),
  nombre: z.string(),
  cedula: z
    .string()
    .regex(/^\d+$/, "La cédula debe ser un número entero positivo")
    .refine(
      (value) => !isNaN(Number(value)),
      "La cédula debe ser un número válido"
    ),
  direccion: z.string(),
  telefono: z
    .string()
    .regex(/^\d{10}$/, "El número debe tener exactamente 10 dígitos"),
  correo: z.string().email(),
  contraseña: z.string(),
  rol: z.string(),
});
