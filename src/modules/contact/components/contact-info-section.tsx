'use client'

import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'motion/react'
import type { CONTACT_CONTENT } from '@/core/configs/contact-content.config'
import { ContactInfoItem } from './contact-info-item'
import { MagneticSocialLink } from './magnetic-social-link'

interface ContactInfoSectionProps {
    content: typeof CONTACT_CONTENT
    onCopy: (text: string, label: string) => Promise<void>
}

const SOCIAL_ICONS = { GitHub: Github, LinkedIn: Linkedin, Telegram: Send } as const

const Title: React.FC<{ children: string; delay: number }> = ({ children, delay }) => (
    <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className="mb-7 text-base font-medium tracking-wide text-white uppercase"
    >
        {children}
    </motion.h2>
)

/** Left column: contact details list + social buttons. */
export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ content, onCopy }) => (
    <div className="w-full shrink-0 lg:w-[290px]">
        <Title delay={0.1}>Contact Info</Title>
        <ul className="mb-14 flex flex-col gap-12">
            <ContactInfoItem
                icon={<Mail className="size-7" strokeWidth={1.5} />}
                label="Mail me"
                lines={[content.email]}
                hrefFor={(l) => `mailto:${l}`}
                onCopy={(t) => onCopy(t, 'Email')}
                delay={0.2}
            />
            <ContactInfoItem
                icon={<Phone className="size-7" strokeWidth={1.5} />}
                label="Call me"
                lines={[content.phone]}
                hrefFor={(l) => `tel:${l.replace(/\s/g, '')}`}
                onCopy={(t) => onCopy(t, 'Phone number')}
                delay={0.3}
            />
            <ContactInfoItem
                icon={<MapPin className="size-7" strokeWidth={1.5} />}
                label="Location"
                lines={content.location}
                delay={0.4}
            />
        </ul>

        <Title delay={0.5}>Social Info</Title>
        <motion.ul
            initial="hide"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            className="flex flex-wrap gap-5"
        >
            {content.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.name]
                return (
                    <motion.li
                        key={s.name}
                        variants={{ hide: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
                        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                        <MagneticSocialLink href={s.href} label={s.name}>
                            <Icon className="size-7" strokeWidth={1.5} />
                        </MagneticSocialLink>
                    </motion.li>
                )
            })}
        </motion.ul>
    </div>
)
