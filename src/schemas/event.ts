import { z } from "zod"

export const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  date: z.string().refine((date) => new Date(date) > new Date(), "Date must be in the future"),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Invalid time format"),
  location: z.string().min(3, "Location must be at least 3 characters"),
})

export type EventFormData = z.infer<typeof eventSchema>
