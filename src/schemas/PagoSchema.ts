import * as z from "zod";

export const PagoSchema = z.object({
  saldo_id: z.string(),
  fecha: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "fecha must be a valid ISO 8601 date string",
  }),
  cantidad: z
    .string()
    .regex(/^\d+$/, "El valor debe ser un número entero positivo")
    .refine(
      (value) => !isNaN(Number(value)),
      "El valor debe ser un número válido"
    ),
});
