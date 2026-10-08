import type { ContactFormValues } from './contact-form.schema'

/** Builds a mailto: URL that opens the visitor's mail app pre-filled with the form content. */
export const buildMailtoUrl = (to: string, values: ContactFormValues): string => {
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    return `mailto:${to}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
}
