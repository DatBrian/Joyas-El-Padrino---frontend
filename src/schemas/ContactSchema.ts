import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/, "El número debe tener exactamente 10 dígitos"),
  message: z.string().optional(),
});
