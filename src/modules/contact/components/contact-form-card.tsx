'use client'

import { BentoCard } from '@/components/shared/bento/bento-card'
import { useRevealOnView } from '@/hooks/useRevealOnView'
import { motion } from 'motion/react'
import type { UseFormReturn } from 'react-hook-form'
import type { SubmitStatus } from '../contact.script'
import type { ContactFormValues } from '../utils/contact-form.schema'
import { FloatingField } from './floating-field'
import { SubmitButton } from './submit-button'

interface ContactFormCardProps {
    form: UseFormReturn<ContactFormValues>
    status: SubmitStatus
    onSubmit: () => void
}

const FIELD = { hide: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }

/** Right column: "Let's work together." card with the animated form. Fields stagger in once the card is visible. */
export const ContactFormCard: React.FC<ContactFormCardProps> = ({ form, status, onSubmit }) => {
    const { register, formState } = form
    const { errors } = formState
    const { ref, shouldShow } = useRevealOnView<HTMLFormElement>()
    const locked = status !== 'idle'

    return (
        <BentoCard from="right" delay={0.1} className="w-full max-w-[765px] p-8 sm:p-10">
            <motion.svg
                aria-hidden
                viewBox="0 0 24 24"
                className="absolute top-0 right-10 size-12 text-white/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            >
                <path
                    fill="currentColor"
                    d="M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z"
                />
            </motion.svg>

            <h1 className="mb-8 text-4xl leading-tight font-medium text-white sm:text-[44px]">
                Let&apos;s work <span className="text-brand">together.</span>
            </h1>

            <motion.form
                ref={ref}
                onSubmit={onSubmit}
                noValidate
                initial="hide"
                animate={shouldShow ? 'show' : 'hide'}
                transition={{ staggerChildren: 0.09, delayChildren: 0.25 }}
                className="flex flex-col gap-4"
                aria-label="Contact form"
            >
                <motion.div variants={FIELD}>
                    <FloatingField
                        label="Name *"
                        autoComplete="name"
                        disabled={locked}
                        error={errors.name?.message}
                        {...register('name')}
                    />
                </motion.div>
                <motion.div variants={FIELD}>
                    <FloatingField
                        label="Email *"
                        type="email"
                        autoComplete="email"
                        disabled={locked}
                        error={errors.email?.message}
                        {...register('email')}
                    />
                </motion.div>
                <motion.div variants={FIELD}>
                    <FloatingField
                        label="Your Subject *"
                        disabled={locked}
                        error={errors.subject?.message}
                        {...register('subject')}
                    />
                </motion.div>
                <motion.div variants={FIELD}>
                    <FloatingField
                        label="Your Message *"
                        multiline
                        disabled={locked}
                        error={errors.message?.message}
                        {...register('message')}
                    />
                </motion.div>
                <motion.div variants={FIELD}>
                    <SubmitButton status={status} />
                </motion.div>
            </motion.form>
        </BentoCard>
    )
}
