import * as z from "zod";

export const SaldoSchema = z.object({
  cliente_id: z.string(),
  fecha: z.date(),
  descripcion: z.string(),
  valor: z
    .string()
    .regex(/^\d+$/, "El valor debe ser un número entero positivo")
    .refine(
      (value) => !isNaN(Number(value)),
      "El valor debe ser un número válido"
    ),
  saldo_actual: z
    .string()
    .regex(/^\d+$/, "El valor debe ser un número entero positivo")
    .refine(
      (value) => !isNaN(Number(value)),
      "El valor debe ser un número válido"
    )
    .optional(),
  cuotas: z
    .string()
    .regex(/^\d+$/, "El valor debe ser un número entero positivo")
    .refine(
      (value) => !isNaN(Number(value)),
      "El valor debe ser un número válido"
    ),
  estado: z.enum(["active", "paid", "canceled"]).optional(),
  pagos: z.any().optional(),
});
