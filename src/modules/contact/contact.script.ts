'use client'

import { CONTACT_CONTENT } from '@/core/configs/contact-content.config'
import { sleep } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { buildMailtoUrl } from './utils/build-mailto-url'
import { contactFormSchema, type ContactFormValues } from './utils/contact-form.schema'

export type SubmitStatus = 'idle' | 'sending' | 'sent'

const EMPTY_VALUES: ContactFormValues = { name: '', email: '', subject: '', message: '' }

export const useContactScript = () => {
    const [status, setStatus] = useState<SubmitStatus>('idle')
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: EMPTY_VALUES,
        mode: 'onTouched',
    })

    // After a successful send, return the form to its idle state
    useEffect(() => {
        if (status !== 'sent') return
        const timer = setTimeout(() => {
            form.reset(EMPTY_VALUES)
            setStatus('idle')
        }, 4000)
        return () => clearTimeout(timer)
    }, [status, form])

    /** No backend yet: hand the message to the visitor's mail app via mailto:. */
    const onSubmit = form.handleSubmit(async (values) => {
        setStatus('sending')
        await sleep(700) // brief beat so the sending state is perceivable
        window.location.href = buildMailtoUrl(CONTACT_CONTENT.email, values)
        setStatus('sent')
        toast.success('Opening your email app…')
    })

    const copy = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success(`${label} copied`)
        } catch {
            toast.error('Could not copy — please copy it manually')
        }
    }

    return { content: CONTACT_CONTENT, form, status, onSubmit, copy }
}
