import { z } from "zod";

export const eventTypes = [
  "Wedding",
  "Aqeeqah",
  "Janazah meal",
  "Madrasah function",
  "Corporate function",
  "Birthday party",
  "Ramadan iftar",
  "Other",
] as const;

const saPhone = /^(\+27|0)\s*\d{2}[\s-]?\d{3}[\s-]?\d{4}$/;

export const cateringEnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Please keep your name under 80 characters"),
  phone: z
    .string()
    .min(1, "Please enter your phone number")
    .regex(saPhone, "Please enter a valid SA number, e.g. 082 123 4567 or +27 82 123 4567"),
  email: z
    .union([z.string().email("Please enter a valid email"), z.literal("")])
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  eventType: z.enum(eventTypes),
  eventDate: z
    .string()
    .min(1, "Please choose an event date")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Please choose a valid date"),
  guests: z
    .coerce.number({ message: "Please enter a number of guests" })
    .int("Whole numbers only")
    .min(1, "Must be at least 1 guest")
    .max(2000, "For events over 2000 guests, please call us directly"),
  notes: z
    .string()
    .max(2000, "Please keep notes under 2000 characters")
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
});

export type CateringEnquiryInput = z.input<typeof cateringEnquirySchema>;
export type CateringEnquiry = z.infer<typeof cateringEnquirySchema>;
