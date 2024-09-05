import * as z from "zod";

export const ContactSchema = z.object({
  nombre: z.string(),
  telefono: z.string().regex(/^\d{10}$/, "El número debe tener exactamente 10 dígitos"),
  mensaje: z.string().optional(),
});
