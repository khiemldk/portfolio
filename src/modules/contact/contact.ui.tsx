'use client'

import { ContactFormCard } from './components/contact-form-card'
import { ContactInfoSection } from './components/contact-info-section'
import type { useContactScript } from './contact.script'

type ContactProps = ReturnType<typeof useContactScript>

/** Contact page: info + social column on the left, "work together" form card on the right. */
export const Contact: React.FC<ContactProps> = ({ content, form, status, onSubmit, copy }) => (
    <div className="mx-auto flex w-full max-w-[1170px] flex-col justify-between gap-12 px-4 pt-6 sm:pt-10 lg:flex-row lg:gap-6">
        <ContactInfoSection content={content} onCopy={copy} />
        <ContactFormCard form={form} status={status} onSubmit={onSubmit} />
    </div>
)
