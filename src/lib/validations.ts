import { z } from 'zod'

export const contactSchema = z.object({
  full_name: z.string().min(2).max(50),

  email: z.string().email().max(100),

  phone: z.string().max(20).optional().or(z.literal('')),

  message: z.string().min(10).max(1000),
})

export type ContactSchemaType = z.infer<typeof contactSchema>
