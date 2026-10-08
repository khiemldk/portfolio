import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string().trim().min(2, 'Please tell me your name'),
    email: z.string().trim().email('That email does not look right'),
    subject: z.string().trim().min(3, 'Add a short subject'),
    message: z.string().trim().min(10, 'A few more words, please (10+ characters)'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
