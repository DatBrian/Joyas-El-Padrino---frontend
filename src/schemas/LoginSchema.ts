import * as z from "zod";

const isEmail = z.string().email();

const isDNI = z.string().regex(/^\d+$/, "Debe ser un número");

export const LoginSchema = z.object({
  username: isEmail.or(isDNI),
  password: z.string(),
});
