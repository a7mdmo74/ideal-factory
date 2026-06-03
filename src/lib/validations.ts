import { z } from 'zod'
import type { ContactFormData } from '@/types'

export const contactSchema: z.ZodType<ContactFormData> = z.object({
  first_name: z.string().min(2).max(50),

  last_name: z.string().min(2).max(50),

  email: z.string().max(100),

  phone: z.string().max(20).optional().or(z.literal('')),

  message: z.string().min(10).max(1000),
})

export type ContactSchemaType = z.infer<typeof contactSchema>
