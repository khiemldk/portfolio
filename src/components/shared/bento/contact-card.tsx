'use client'

import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { motion } from 'motion/react'
import { BentoCard } from './bento-card'
import { CornerArrowButton } from './corner-arrow-button'

/** Closing call-to-action tile with a slowly rotating sparkle. */
export const ContactCard: React.FC = () => (
    <BentoCard href={HOME_CONTENT.contact.href} from="right" delay={0.1} className="h-full px-8 pt-20 pb-10">
        <motion.svg
            aria-hidden
            viewBox="0 0 24 24"
            className="absolute top-6 left-8 size-12 text-white/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
            <path
                fill="currentColor"
                d="M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z"
            />
        </motion.svg>

        <h2 className="text-[2.75rem] leading-[3.25rem] font-medium text-white">
            Let&apos;s <br />
            work <span className="text-brand">together.</span>
        </h2>

        <div className="absolute right-8 bottom-9">
            <CornerArrowButton />
        </div>
    </BentoCard>
)
