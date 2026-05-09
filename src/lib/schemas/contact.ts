import { z } from "zod";

const saPhone = /^(\+27|0)\s*\d{2}[\s-]?\d{3}[\s-]?\d{4}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "Please keep your name under 80 characters"),
  phone: z
    .string()
    .min(1, "Please enter a phone number")
    .regex(saPhone, "Please enter a valid SA number"),
  email: z
    .union([z.string().email("Please enter a valid email"), z.literal("")])
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z
    .string()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Please keep your message under 2000 characters"),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
